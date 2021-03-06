// declare module models {
    export interface IArtist {
        id?: string,
        artistName: string,
        soundcloudid?: string,
        genre: string,
        avatar: string
    }
    export interface IUser {
        fn: string,
        ln: string,
        email?: string,
        password?: string
    }
    export interface IVenue {
        venueId?: string,
        name: string,
        address1?: string,
        addresss2?: string,
        city: string,
        state: string,
        zip?: string
    }
    export interface IShow {
        artist?: string,
        venue?: string,
        datetime?: string,
        ticketinfo?: string
    }
    export interface IPost {
        title?: string,
        body?: string,
        userId?: string,
        dateTime?: string
    }
    export interface IComments {
        userId?: string,
        postId?: string,
        body?: string
    }
// }