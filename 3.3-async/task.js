"use strict"
class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, ftime, id) {
        if (!id) {
            throw new Error('Ошибка');
        }

        if (this.alarmCollection.some(item => item.id === id)) {
            return console.error("Ошибка. id существует");
        }

        this.alarmCollection.push({time, ftime, id});
    }

    removeClock(id) {
        let arrayLeng = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        let arrayLeng2 = this.alarmCollection.length;
        if (arrayLeng === arrayLeng2) {
            return false;
        } else {
            return true;
        }
    }
    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        const currentTime = this.getCurrentFormattedTime;
        function checkClock(clock) {
            if (currentTime() === clock.time) {
                clock.ftime();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(()=>{
                this.alarmCollection.forEach(item => checkClock(item))
            }, 1000);
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        } 
    }
    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} время: ${item.time}`));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
const alarmClock = new AlarmClock;
console.log(alarmClock.getCurrentFormattedTime());

