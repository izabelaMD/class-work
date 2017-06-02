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
				'https://sacwaldorf.org/wp-content/uploads/2016/01/Sutter-Nathan-150x150.jpg',
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
				'https://sacwaldorf.org/wp-content/uploads/2016/01/Millard-John-1-150x150.jpg',
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
