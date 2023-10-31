import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

type dataType = {
  name: string
  author: string
  id: number
}

@Injectable()
export class TestService {
  data = [
    {
      name: '存有與虛無',
      author: '沙特',
      id: 1,
    },
    {
      name: '單子論',
      author: '萊布尼茲',
      id: 2,
    },
    {
      name: '物不遷論',
      author: '僧肇',
      id: 3,
    },
    {
      name: '道德經',
      author: '老子',
      id: 4,
    },
  ];

  getAllData() {
    return of(this.data);
  }

  getData(id: number) {
    return of(this.data.filter(data => data.id === id));
  }

  addData(data: dataType) {
    return of(this.data.push(data));
  }

  updateData(id: number, data: dataType) {
    const foundDataIndex = this.data.findIndex(data => data.id === id)
    console.log("🚀 -----------------------------------------------------------------------------------------🚀")
    console.log("🚀 ~ file: test.service.ts:49 ~ TestService ~ updateData ~ foundDataIndex:", foundDataIndex)
    console.log("🚀 -----------------------------------------------------------------------------------------🚀")
    if (foundDataIndex === -1) return
    let foundData = this.data.find(data => data.id === id)
    foundData = {
      ...foundData,
      ...data
    }
    return of(this.data.splice(foundDataIndex, 1, foundData))
  }

  deleteData(id: number) {
    const foundDataIndex = this.data.findIndex(data => data.id === id)
    if (foundDataIndex === -1) return
    return of(this.data.splice(foundDataIndex, 1))
  }
}
