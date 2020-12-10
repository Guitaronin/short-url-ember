import ApplicationSerializer from './application';

export default class UrlSerializer extends ApplicationSerializer {
  serializeIntoHash(data, type, record, options) {
    const url = this.serialize(record, options);
    Object.assign(data, url);
  }

  normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
    return this.normalizeSingleResponse(store, primaryModelClass, { url: payload }, id, requestType);
  }
}
