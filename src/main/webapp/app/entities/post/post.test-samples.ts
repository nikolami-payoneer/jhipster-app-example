import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 35989,
  title: 'Fantastic',
};

export const sampleWithPartialData: IPost = {
  id: 59985,
  title: 'Beauty Personal index',
};

export const sampleWithFullData: IPost = {
  id: 88929,
  title: 'intelligence infrastructure ol',
};

export const sampleWithNewData: NewPost = {
  title: 'multi-byte payment programming',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
