#!/usr/bin/env node

'use strict';

var Agenda = require("agenda");

function relaySwitch(pins, status, done) {
	console.log('Relay: ' + status + " on " + pins);
	done();
}

function pwmSwitch(pins, status, done) {
	console.log('PWM: ' + status + " on " + pins);
	done();
}

var mongoConnectionString = "mongodb://db:27017/agenda";
var agenda = new Agenda({
	db: {address: mongoConnectionString},
	processEvery: "1 minute",
	collection: 'agendaJobs',
	defaultLockLifetime: 30000 // 30 seconds
});

agenda.define('relay switch', function(job, done) {
  var data = job.attrs.data;
  relaySwitch(data.pins, data.status, done);
});

agenda.define('pwm switch', function(job, done) {
  var data = job.attrs.data;
  pwmSwitch(data.pins, data.status, done);
});

agenda.on('ready', function() {
  // Alternatively, you could also do:
  agenda.every('*/1 * * * *', 'relay switch', { pins: [1, 3,4], status: true });

  agenda.every('15-40 * * * *', 'pwm switch', { pins: [2], status: 20 });

  agenda.start();
});

agenda.on('start', function(job) {
  console.log("Job %s starting", job.attrs.name);
});

console.log("Fully started NodeJS");
