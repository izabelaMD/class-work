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
				'https://tv-fanatic-res.cloudinary.com/iu/s--1m2aehzt--/c_thumb,f_auto,g_auto,h_344,q_auto,w_229/v1371218985/archer-rampage',
				 'I am so happy to announce that I will be a father in two weeks!!! @tangy_calabacin00 #soexcited #gonnabeadad #lovebeingorange #PEPINO ' 
				),

			new Post(
				'Looking for a Fellow Christian Lover?',
				'www.christianmingle.com',
				'Christian Mingle Official',
				'https://static.christianmingle.com/images/logo_facebook.png',
				'Sign up for our free 30 day trial on Christian Mingle! Just use this promo code: CHRISTLOVE and find us at www.christianmingle.com!'
				),

			new Post(
				'Bless you',
				'https://google.com',
				'violin4lyfe',
				'https://1.bp.blogspot.com/-JicFYQ_WAEc/TdkenYu4W_I/AAAAAAAAAN4/dTBlxx8sOlY/s1600/187.JPG',
				'Bless you all, my brothers and sisters.'
				),

			new Post(
				'Amen.',
				'https://vuejs.org',
				'Buddy Christ',
				'http://24.media.tumblr.com/tumblr_m6sl6qZgf81rxfxhbo1_500.jpg',
				'#sonofgod #themessiah #judahsucks'
				),

			new Post(
				'#obsessedwithtimlincecum ;)',
				'https://google.com',
				'Tim Linceum Is Life',
				'http://l.yimg.com/os/en_us/Sports/ap/201503211833668225649',
				'check out my website: timlincecum.com for more of our favorite Jesus lookalike!'
				),
				
			new Post(
				'Just joined a vampire dating site!!',
				'https://www.vampiredatingsite.com',
				'PhysicsVamp',
				'https://s-media-cache-ak0.pinimg.com/originals/78/6f/77/786f779f0fa90f2408c05e0f16e7bfe4.gif',
				'Looking for bloodthirsty singles in my area!'
				),
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
