
/** Timestamp interval */
export interface TsInterval {
    from: number,
    to: number
}

export interface Time {
    hour?: number,
    minute?: number,
    second?: number
}

export interface TimeInterval {
    from: Time,
    to: Time
}