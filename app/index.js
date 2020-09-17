#!/usr/bin/env node

'use strict';

var Agenda = require("agenda");
var wpi = require('wiring-pi');

function relaySwitch(pins, status, done) {
	console.log('Relay: ' + status + " on " + pins);
  for (var i = 0, len = pins.length; i < len; i++) {
    wpi.digitalWrite(pins[i], status);
  }
	done();
}

function pwmSwitch(pins, status, done) {
	console.log('PWM: ' + status + " on " + pins);
  for (var i = 0, len = pins.length; i < len; i++) {
    wpi.pwmWrite(pins[i], status);
  }
	done();
}

// initialization
wpi.setup('wpi');
var relayPins = [7, 2];
for (var i = 0, len = relayPins.length; i < len; i++) {
  wpi.pinMode(relayPins[i], wpi.OUTPUT);
}
var pwmPins = [1];
for (var i = 0, len = pwmPins.length; i < len; i++) {
  wpi.pinMode(pwmPins[i], wpi.PWM_OUTPUT);
}

var mongoConnectionString = "mongodb://db:27017/agenda";
var agenda = new Agenda({
	db: {address: mongoConnectionString},
	processEvery: "1 minute",
	collection: 'agendaJobs',
	defaultLockLifetime: 30000 // 30 seconds
});

// job definitions
agenda.define('relay switch on', function(job, done) {
  var data = job.attrs.data;
  relaySwitch(data.pins, 1, done);
});

agenda.define('relay switch off', function(job, done) {
  var data = job.attrs.data;
  relaySwitch(data.pins, 0, done);
});

agenda.define('pwm switch on', function(job, done) {
  var data = job.attrs.data;
  pwmSwitch(data.pins, 1023, done);
});

agenda.define('pwm switch off', function(job, done) {
  var data = job.attrs.data;
  pwmSwitch(data.pins, 0, done);
});

agenda.on('ready', function() {
  // initial new jobs saved into db
  /*
  agenda.every('0-4,10-14,20-24,30-34,40-44,50-54 * * * *', 'relay switch on', { pins: relayPins, status: true });
  agenda.every('5-9,15-19,25-29,35-39,45-49,55-59 * * * *', 'relay switch off', { pins: relayPins, status: false });
  
  agenda.every('* 8-20 * * *', 'pwm switch on', { pins: pwmPins });
  agenda.every('* 0-7,21-23 * * *', 'pwm switch off', { pins: pwmPins });
  */
  agenda.start();
});

agenda.on('start', function(job) {
  console.log("Job %s starting", job.attrs.name);
});

console.log("Fully started Local worker");
