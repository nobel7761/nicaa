import { IMeta } from '../../types';
import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';

const HUDAI_URL = '/sample';

export const hudaiApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    hudai: build.query({
      query: () => ({
        url: `${HUDAI_URL}`,
        method: 'GET',
      }),
      transformResponse: (
        response: { data: { message: string } },
        meta: IMeta
      ) => {
        return {
          hudai: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.hudai], //provide tags means when we request the data and then we will get the data, it will cache the data
    }),
  }),
});

export const { useHudaiQuery } = hudaiApi;
