import { generateId } from "../Utils/generateId.js"


export class Job {

  /**
   * The data needed to make a car
   * @param {{company: string, jobTitle: string, hours: number, rate: number, descriptionj: string, imgUrl: string, id?:string}} data 
   */

  constructor(data) {
    this.id = data.id || generateId()
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.descriptionj = data.descriptionj
    this.imgUrl = data.imgUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMz0Knqn9dqXviC3_oAUqYglnccrjzUdFl8w&usqp=CAU'
  }

  get JobCardTemplate() {
    return /*html*/`
<div class= "col-md-4 col-lg-3 mb-3">
<div class= " card">
<img src="${this.imgUrl}" alt="${this.company}-${this.jobTitle}"
class="img-fluid">
<div class="card-body">
<h5 class="text-uppercase">
${this.company} | ${this.jobTitle} </h5>
<p><strong>${this.hours} ${this.rate}</strong></p>
<p>${this.descriptionj}</p>
</div>
</div>
</div>`














  }

























}