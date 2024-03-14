import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewCountServiceService{
  private viewCounts = new Map<number, number>();

  incrementViewCount(id: number): void {
    const currentCount = this.viewCounts.get(id) || 0;
    this.viewCounts.set(id, currentCount + 1);
  }

  getViewCount(id: number): number {
    return this.viewCounts.get(id) || 0;
  }
}
