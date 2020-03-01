const app = new Vue({
    el: '#homeApp',
    data: {
    //   days: [26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      
      days: [{index:0, date: 26, hasEvent: false, hasSitter: false}, {index:1, date: 27, hasEvent: false, hasSitter: false}, {index:2, date: 28, hasEvent: false, hasSitter: false},
        {index:3, date: 29, hasEvent: false, hasSitter: false}, {index:4, date: 30, hasEvent: false, hasSitter: false}, {index:5, date: 31, hasEvent: false, hasSitter: false},
        {index:6, date: 1, hasEvent: true, hasSitter: false}, {index:7, date: 2, hasEvent: false, hasSitter: false}, {index:8, date: 3, hasEvent: false, hasSitter: false},
        {index:9, date: 4, hasEvent: false, hasSitter: false}, {index:10, date: 5, hasEvent: false, hasSitter: false}, {index:11, date: 6, hasEvent: false, hasSitter: false},
        {index:12, date: 7, hasEvent: true, hasSitter: true}, {index:13, date: 8, hasEvent: false, hasSitter: false}, {index:14, date: 9, hasEvent: false, hasSitter: false}, 
        {index:15, date: 10, hasEvent: false, hasSitter: false}, {index:16, date: 11, hasEvent: false, hasSitter: false}, {index:17, date: 12, hasEvent: false, hasSitter: false}, 
        {index:18, date: 13, hasEvent: false, hasSitter: true}, {index:19, date: 14, hasEvent: false, hasSitter: false}, {index:20, date: 15, hasEvent: false, hasSitter: false}, 
        {index:21, date: 16, hasEvent: false, hasSitter: false}, {index:22, date: 17, hasEvent: false, hasSitter: false}, {index:23, date: 18, hasEvent: false, hasSitter: false}, 
        {index:24, date: 19, hasEvent: false, hasSitter: true}, {index:25, date: 20, hasEvent: false, hasSitter: false}, {index:26, date: 21, hasEvent: true, hasSitter: false}, 
        {index:27, date: 22, hasEvent: false, hasSitter: true}, {index:28, date: 23, hasEvent: false, hasSitter: false}, {index:29, date: 24, hasEvent: false, hasSitter: false}, 
        {index:30, date: 25, hasEvent: false, hasSitter: true}, {index:31, date: 26, hasEvent: false, hasSitter: false}, {index:32, date: 27, hasEvent: false, hasSitter: false}, 
        {index:33, date: 28, hasEvent: true, hasSitter: true}, {index:34, date: 29, hasEvent: false, hasSitter: false} ],
      sitters: ["Mary", "Peter", "Thomas"],
      sitterNumber: ["4", "4", "4"],
      newSitterName: '',
      newSitterNumber: '',
      sitterAddButtonHidden: true,
      apptAddButtonHidden: true,
      newApptDay:'',
      newApptTime: "",
      indexOffset: 5,
      index: 0
      // index: this.newApptDay + 6

    },
    // computed: {
    //   index: function() {
    //     return parseFloat(this.newApptDay) + parseFloat(this.indexOffset);
    //   }
    // },
    methods: {
      addSitter() {
          console.log(this.newSitterName);
          console.log(this.newSitterNumber)
          this.sitters.push(this.newSitterName);
          this.sitterNumber.push(this.newSitterNumber);
          this.newSitterName = "";
          this.newSitterNumber = "";
          this.sitterAddButtonHidden = true;
      },
      addAppt() {
        console.log(this.newApptDay);
        console.log(this.newApptTime);
        // this.index = newApptDay + 6;
        console.log(this.index);
        this.days[this.index].hasEvent = true;
        this.days[this.index].hasSitter = false;
        this.newApptDay = "";
        this.newApptTime = "";
        this.apptAddButtonHidden = true;
        
      },
      onClick() {
        window.location.href = 'first.html';
      },
      startAddAppt(number) {
        this.index = number;
        this.apptAddButtonHidden = false;
      }
    }
  });
  