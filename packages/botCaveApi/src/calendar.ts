import { TimeIntervalBody } from "./time"

/** Post body params for the calendar sync route */
export interface PostCalendarSync {
    /**"Target calendar id" */
    calendarId: string,
    /**"Flag used to tell if the calendar should be sync or unsync" */
    isSync: boolean
}

/** Post body params for the calendar availabilities route*/
export interface PostCalendarAvailabilities {
    /**The discord guild related to the request */
    guildID: string,
    /**The discord user id list */
    userIDs: string[],
    /**Slot duration we want to fit in all the calendars (in minutes) */
    slotDuration: number,
    /**Search interval start date (ISO Format) */
    from: string,
    /**Search interval finish date (ISO Format) */
    to: string,
    /**Max number of available slots to return */
    limit?: number,
    /**Exclude a time range for all the days in the given interval */
    excludedTimeSlots?: TimeIntervalBody[]
}

/** Post body params for the calendar event creation route */
export interface PostCalendarAddEvent {
    /**The discord guild related to the request */
    guildID: string,
    /**The discord user id list */
    userIDs: string[],
    /**ISO date time representing the event start */
    from: string,
    /**ISO date time representing the event finish */
    to: string,
    /**The name of the event displayed in the calendar */
    eventName: string,
    /**The description of the event displayed in the calendar */
    eventSummary: string,
    /**The category related to the event (could be the discord role associated to the request) */
    eventCategory: string,
    /**The discord uid of the user hosting the event */
    ownerID?: string
}