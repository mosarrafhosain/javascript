const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM"
    }
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"))
  }
});

const addCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.time} was scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calendar);
}

async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calendar = await addCalendar(meetingDetails);
    console.log(calendar);
  } catch (err) {
    console.log(err.message);
  }
}

myMeeting();
