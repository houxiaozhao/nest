import * as mongoose from 'mongoose';
const locationSchema = new mongoose.Schema({
  x: Number,
  y: Number,
});
const alarmRulesSchema = new mongoose.Schema({
  name: String,
  num: Number,
  rule: String,
  time: Number,
});
const LORASchema = new mongoose.Schema({
  SF: String,
  CRC: String,
  BW: String,
  PWR: String,
  RSSI: String,
  SNR: String,
});
export const MoteSchema = new mongoose.Schema({
  name: String,
  id: String,
  type: String,
  online: Boolean,
  autoControl: Boolean,
  collectCycle: Number,
  desc: String,
  moteStatus: Boolean,
  collectTime: Date,
  createTime: Date,
  isControl: Boolean,
  location: locationSchema,
  alarmRules: [alarmRulesSchema],
  LORA: LORASchema,
});
