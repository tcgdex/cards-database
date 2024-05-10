import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "オトシドリ",
		'zh-tw': "下石鳥",
		th: "โอโตชิโดริ",
		id: "Bombirdier"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [962],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "胸元の 袋で エサを 包み 巣に 持ち帰る。 大きな 音の するものを 落として 喜ぶ。",
		'zh-tw': "會用胸口的袋子包住食物，然後帶回巢裡。以弄掉會 發出響亮聲音的東西為樂。",
		th: "ห่ออาหารกลับรังด้วยถุงที่อก ชอบใจเวลาได้ทำของที่มีเสียงดังตก",
		id: "Bombirdier membungkus makanan dengan kantong di dadanya dan membawanya pulang ke sarangnya. Pokémon ini senang ketika menjatuhkan benda yang menghasilkan bunyi keras."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ガラクタはこび",
			'zh-tw': "搬運破爛",
			th: "ขนของโกโรโกโส",
			id: "Mengangkut Rongsokan"
		},

		effect: {
			ja: "自分の山札から「ポケモンのどうぐ」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ด [ไอเท็มติดโปเกมอน] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 3 lembar Pokémon Tool dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "わしづかみ",
			'zh-tw': "緊抓",
			th: "โฉบเหยื่อ",
			id: "Mencengkeram"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card