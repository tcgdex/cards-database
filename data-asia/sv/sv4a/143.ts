import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドードリオ",
		'zh-tw': "嘟嘟利",
		th: "โดโดริโอ",
		id: "Dodrio",
		'zh-cn': "嘟嘟利"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	dexId: [85],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "めったに 見つからない 珍種。 ３つの 頭は 喜び 悲しみ 怒りの 感情を 表す。",
		'zh-tw': "極為少見的珍稀物種。３顆頭會各自表現出 愉快、悲傷和憤怒的情緒。",
		th: "เป็นสายพันธุ์หายากที่แทบจะไม่พบเห็น หัวทั้งสามแสดงความรู้สึกยินดี เศร้าโศก และโมโห",
		id: "Dodrio adalah spesies Pokémon langka yang jarang ditemukan. Tiga kepalanya menunjukkan emosi berupa perasaan senang, sedih, dan marah.",
		'zh-cn': "極為少見的珍稀物種。３顆頭會各自表現出 愉快、悲傷和憤怒的情緒。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ばくそうドロー",
			'zh-tw': "爆走抽出",
			th: "จั่วเต็มเหยียด",
			id: "Ambil Kebut-kebutan",
			'zh-cn': "爆走抽出"
		},

		effect: {
			ja: "自分の番に1回使える。このポケモンにダメカンを1個のせる。その後、自分の山札を1枚引く。",
			'zh-tw': "在自己的回合時可使用1次。在這隻寶可夢身上放置1個傷害指示物。然後，從自己的牌庫抽出1張卡。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา วางตัวนับแดเมจ 1 ตัวบนโปเกมอนนี้ หลังจากนั้น จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Letakkan 1 Token Kerusakan pada Pokémon ini. Setelah itu, ambil 1 kartu dari atas Deck sendiri.",
			'zh-cn': "在自己的回合時可使用1次。在這隻寶可夢身上放置1個傷害指示物。然後，從自己的牌庫抽出1張卡。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "いかりのくちばし",
			'zh-tw': "憤怒鳥嘴",
			th: "จะงอยปากพิโรธ",
			id: "Paruh Kemarahan",
			'zh-cn': "憤怒鳥嘴"
		},

		damage: "10+",

		effect: {
			ja: "このポケモンにのっているダメカンの数×30ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Token Kerusakan yang dimiliki Pokémon ini.",
			'zh-cn': "增加這隻寶可夢身上放置的傷害指示物的數量×30點傷害。"
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