import { Document } from 'mongoose';
interface Location {
  x: number;
  y: number;
}

interface AlarmRules {
  name: string;
  num: number;
  rule: string;
  time: number;
}

interface LORA {
  SF: string;
  CRC: string;
  BW: string;
  PWR: string;
  RSSI: string;
  SNR: string;
}
export interface Mote extends Document {
  name: string;
  id: string;
  type: string;
  online: boolean;
  autoControl: boolean;
  collectCycle: number;
  desc: string;
  moteStatus: boolean;
  collectTime: Date;
  createTime: Date;
  isControl: boolean;
  location: Location;
  alarmRules: AlarmRules[];
  LORA: LORA;
}
