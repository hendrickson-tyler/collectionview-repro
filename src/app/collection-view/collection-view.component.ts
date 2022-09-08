import { Component } from "@angular/core";

@Component({
  selector: "ns-items",
  templateUrl: "./collection-view.component.html",
  styleUrls: ["./collection-view.component.css"],
})
export class CollectionViewComponent {
  items = [
    {
      main: "Main Item 1",
      subItems: [
        {
          text: "Sub Item 1",
        },
      ],
    },
    {
      main: "Main Item 2",
      subItems: [
        {
          text: "Sub Item 1",
        },
        {
          text: "Sub Item 2",
        },
      ],
    },
    {
      main: "Main Item 1",
      subItems: [
        {
          text: "Sub Item 1",
        },
      ],
    },
  ];

  templateSelector(item: any, _index: number, _items: any[]): string {
    return "item";
  }
}
