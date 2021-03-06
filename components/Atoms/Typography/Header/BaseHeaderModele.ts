import BaseHeaderInterface from "~/components/Atoms/Typography/Header/BaseHeaderInterface";

export default class BaseHeaderModele implements BaseHeaderInterface {
  constructor(htmlType: string, visualType: string = "light") {
    this.htmlType = htmlType;
    this.visualType = visualType;
  }
  htmlType: string;
  visualType: string;

}
