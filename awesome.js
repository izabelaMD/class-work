class Post {
	constructor(title,link,author,img,body){
		this.title = title;
		this.link = link;
		this.author = author;
		this.img = img;
		this.body = body;
	}
}

const app = new Vue({

	el: '#root',

	data: {

		keyword: '',

		postlist: [
		
		new Post(
				'It\'s a Boy!!!!',
				'https://google.com',
				'Nicky Abate',
				'http://b.vimeocdn.com/ps/954/954244_300.jpg',
				 'I am so happy to announce that I will be a father in two weeks!!! @tangy_calabacin00 #soexcited #gonnabeadad #lovebeingorange #tappedthat #sojuicy #PEPINO ' 
				),

			new Post(
				'It\'s a Boy!!!!',
				'https://vuejs.org',
				'Tangy Calabacín',
				'http://1.bp.blogspot.com/-KnyIV4Pq7Ew/UHL3b0VRD1I/AAAAAAAAAOo/NbfqAfEfXPE/s1600/32482_396324961295_209118161295_4666700_7835490_n_thumb.jpg',
				'Cannot wait to be a mamma! @nicky.abate9 #lovemyhubby #dueintwoweeks #orangeontheway #momlife #preggo ##PEPINO'
				),

			new Post(
				'My Son\'s Having a Baby!!!',
				'https://google.com',
				'Crazy Fredrick',
				'http://vignette4.wikia.nocookie.net/annoyingorange/images/b/bb/Tangerine.png/revision/latest?cb=20140518161457',
				'Crazy Fredrick bought many very exquisite opal jewels. Lonsectetur adipiscing elit. Morbi viverra euismod euismod. Nulla leo est, venenatis at fringilla eget, tincidunt sed justo. In efficitur dui odio, sit amet finibus sem hendrerit ut. Etiam vestibulum sem vel metus lobortis, vitae dictum metus sagittis. Nulla facilisi.'
				),

			new Post(
				'Another Post: Promptly judged',
				'https://vuejs.org',
				'Jane Author',
				'http://vignette1.wikia.nocookie.net/annoyingorange/images/6/62/Lemon_2.png/revision/latest?cb=20140823054015',
				'We promptly judged antique ivory buckles for the next prize. Adipiscing elit. Morbi viverra euismod euismod. Nulla leo est, venenatis at fringilla eget, tincidunt sed justo. In efficitur dui odio, sit amet finibus sem hendrerit ut. Etiam vestibulum sem vel metus lobortis, vitae dictum metus sagittis. Nulla facilisi.'
				),

			new Post(
				'#suckit',
				'https://google.com',
				'YACKOB',
				'http://www.demolitionsquad.de/videogames/pictures/gurke.gif',
				'MWAHAHAHAHAHAHAHAHAHAHAHAHAh #iactuallytappedthat #mixedbaby #PEPINO '
				)
		]
	},
	computed: {
		filterlist(){
			return this.postlist.filter((post)=>{
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});
