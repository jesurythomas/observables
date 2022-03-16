import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  BehaviorSubject,
  interval,
  observable,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
} from "rxjs";
import { map, filter, switchMap, pluck, tap, share } from "rxjs/operators";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription;
  private observableSubscription2: Subscription;
  private observableSubscription3: Subscription;
  private observableSubscription4: Subscription;

  testSub = new Subject();
  testBehaviorSub = new BehaviorSubject(0);
  testReplaySub = new ReplaySubject(4);

  constructor() {}

  ngOnInit() {
    // this.observableSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const observableSubscription3 = this.testReplaySub.subscribe((data) => {
      console.log("Subject 1 : ", data);
    });

    this.testReplaySub.next(1);
    this.testReplaySub.next(2);
    this.testReplaySub.next(3);
    this.testReplaySub.next(4);
    this.testReplaySub.next(5);

    const observableSubscription4 = this.testReplaySub.subscribe((data) => {
      console.log("Subject 2 : ", data);
    });

    this.testReplaySub.next(6);
    this.testReplaySub.next(7);

    // this.observableSubscription = customObservable
    //   .pipe(
    //     filter((data) => {
    //       return data > 0;
    //     }),
    //     map((data: number) => {
    //       return "Round " + (data + 1);
    //     })
    //   )
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       alert(error);
    //     },
    //     () => {
    //       alert("Observable is complete");
    //     }
    //   );

    // this.observableSubscription = this.testSub.subscribe((data) => {
    //   console.log(data);
    // });

    // this.testSub.next("Burgers");
    // this.testSub.next("Spaghetti");

    // setTimeout(() => {
    //   this.testSub.next("Fries");
    // }, 5000);

    // const customObservable = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);

    //   setTimeout(() => {
    //     observer.next(4);
    //   }, 1000);
    // }).pipe(
    //   tap((value) => {}),
    //   share()
    // );

    // this.observableSubscription = customObservable.subscribe((data) => {
    //   console.log("Observable 1 : ", data);
    // });

    // this.observableSubscription2 = customObservable.subscribe((data) => {
    //   console.log("Observable 2 : ", data);
    // });
  }

  ngOnDestroy() {
    this.observableSubscription.unsubscribe();
    this.observableSubscription2.unsubscribe();
  }
}
