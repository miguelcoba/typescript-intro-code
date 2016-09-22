/*
Write a module that exports a Traveler class and TravelerType enum.
The Traveler class has:
 - firstName, middleName, lastName and travelerType
 - A getter for the full name as a string.
The enum type contains:
 - Adult, Child
*/
export enum TravelerType {Adult, Child}

export class Traveler {
    constructor(public firstName: string, public middleName: string, public lastName: string, travelerType: TravelerType) {}
    get fullName(): string {
        return [this.firstName, this.middleName, this.lastName].join(' ');
    }
}