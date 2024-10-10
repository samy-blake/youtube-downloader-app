import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { randomDowloadItems, randomPreviewDownloadData } from '../fake.data';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface DownloadItem {
  process: number;
  title: string;
  channel: string;
  state: "process" | "waiting" | "finish" | "failed";
}

export interface PreviewDownloadData {
  image: string;
  channel: string;
  description: string;
  url: string;
  title: string;
}

@Component({
  selector: 'app-dowloader',
  standalone: true,
  imports: [
    CardModule,
    NgForOf,
    ProgressBarModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dowloader.component.html',
  styleUrl: './dowloader.component.scss'
})
export class DowloaderComponent implements OnInit {
  public downloads: DownloadItem[] = randomDowloadItems;
  public previewDownloadData?: PreviewDownloadData = randomPreviewDownloadData;
  public previewLoading: boolean = false;
  public previewForm: FormGroup = new FormGroup({
    url: new FormControl('', Validators.required)
  })


  constructor() { }

  ngOnInit(): void {
    this.previewForm.controls['url'].valueChanges.subscribe(async () => {
      if (this.previewForm.invalid) return;
      const response = await (window as any).electron?.downloadPreview(this.previewForm.value.url)
      console.log(response)
    })
  }



  submitPreview(): void {
    if (!this.previewForm.invalid) return;
    const value = this.previewForm.value;
    console.log(value)
  }
}
