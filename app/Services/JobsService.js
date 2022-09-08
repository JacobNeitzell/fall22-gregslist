import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";
import { Job } from "../Models/Job.js";

class JobsService {

  addJob(formData) {
    let job = new Job(formData)
    appState.jobs = [job, ...appState.jobs]
    saveState('jobs', appState.jobs)
  }

}

export const jobsService = new JobsService()