import * as mongoose from 'mongoose';
import { urlValidator } from '../validations/url';

const urlSchema = new mongoose.Schema(
  {
    orginalUrl: {
      type: String,
      required: true,
      trim: true,
      validate(value: string) {
        if (!urlValidator(value)) {
          throw new Error('Invalid URL!');
        }
      },
    },
    shortenId: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    viewCount: {type: Number, default: 0},
  },
  { timestamps: true, collection: 'Urls' },
);

const Url = mongoose.model('Url', urlSchema);

export default Url;
