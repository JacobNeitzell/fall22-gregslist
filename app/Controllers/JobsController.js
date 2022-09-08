import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"
import { jobsService } from "../Services/JobsService.js"

function drawJobs() {
  let template = ''
  appState.jobs.forEach(job => template += job.JobCardTemplate)
  console.log("i am working")




  setHTML(
    'listings', template)
}


export class JobsController {
  constructor() {
    console.log('the jobs controller')

  }

  showJobs() {
    drawJobs()
  }



  addJob() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      // @ts-ignore
      let formData = getFormData(form)
      jobsService.addJob(formData)
      // @ts-ignore
      form.reset()

    } catch (error) {
      console.error('addJob', error)
    }
  }
















































}