import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドードリオ",
		'zh-tw': "嘟嘟利",
		id: "Dodrio"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [85],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "めったに 見つからない 珍種。 ３つの 頭は 喜び 悲しみ 怒りの 感情を 表す。",
		'zh-tw': "極為少見的珍稀物種。３顆頭會各自表現出 愉快、悲傷和憤怒的情緒。",
		id: "Dodrio adalah spesies Pokémon langka yang jarang ditemukan. Tiga kepalanya menunjukkan emosi berupa perasaan senang, sedih, dan marah."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ばくそうドロー",
			'zh-tw': "爆走抽出",
			id: "Ambil Kebut-kebutan"
		},

		effect: {
			ja: "自分の番に1回使える。このポケモンにダメカンを1個のせる。その後、自分の山札を1枚引く。",
			'zh-tw': "在自己的回合時可使用1次。在這隻寶可夢身上放置1個傷害指示物。然後，從自己的牌庫抽出1張卡。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Letakkan 1 Token Kerusakan pada Pokémon ini. Setelah itu, ambil 1 kartu dari atas Deck sendiri."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "いかりのくちばし",
			'zh-tw': "憤怒鳥嘴",
			id: "Paruh Kemarahan"
		},

		damage: "10+",

		effect: {
			ja: "このポケモンにのっているダメカンの数×30ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×30點傷害。",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
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