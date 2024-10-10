import { faker } from '@faker-js/faker';
import { DownloadItem, PreviewDownloadData } from './dowloader/dowloader.component';

// export const faker = new Faker({
//   // locale: [de_CH, de],
// });

export function createRandomDownloadItem(): DownloadItem {
  return {
    channel: faker.internet.userName(),
    process: faker.number.int({ min: 0, max: 100 }),
    state: 'process',
    title: faker.music.songName()
  };
}

export const randomDowloadItems: DownloadItem[] = faker.helpers.multiple(createRandomDownloadItem, {
  count: 7,
});

export const randomPreviewDownloadData: PreviewDownloadData = {
  channel: faker.internet.userName(),
  image: "https://loremflickr.com/cache/resized/65535_53804064135_ef83d142a3_m_160_90_nofilter.jpg",
  description: faker.food.description(),
  title: faker.music.songName(),
  url: faker.internet.url()
}