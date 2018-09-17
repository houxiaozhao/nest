export class CreateMoteDto {
  name: string;
  id: string;
  type: string;
  collectCycle: number;
  desc: string;
  isControl: boolean;
  location: object;
  alarmRules: object;
  LORA: object;
  data: object;
}
