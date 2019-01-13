import {observable} from 'mobx'

class ObservablePhotoStore {
	@observable photos = []

	getPhotos() {
		this.photos = [
			'title': 'foo',

		]
	}

}

const observablePhotoStore = new ObservablePhotoStore()
export default observablePhotoStore
