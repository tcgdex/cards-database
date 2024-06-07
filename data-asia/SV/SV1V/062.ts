import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨクバリス",
		'zh-tw': "藏飽栗鼠",
		th: "โยคุบะริสึ",
		id: "Greedent"
	},

	illustrator: "kantaro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [820],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "体の 約２倍の 長さの 尻尾で 木から 落とした 木の実を ごっそり 包んで 持ち去るぞ。",
		'zh-tw': "會用約有身體２倍長的尾巴把樹上掉下來的樹果 全都裹起來帶走。",
		th: "ใช้หางที่ยาวเป็น 2 เท่าของลำตัวเก็บผลไม้ที่หล่นจากต้นแล้วหนีไป",
		id: "Greedent menyimpan buah beri yang terjatuh dari pohon di ekornya yang panjangnya sekitar 2 kali lipat dari tubuhnya, dan membawa pergi beri tersebut."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住",
			th: "กัดติด",
			id: "Menggigit"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "きょうかまえば",
			'zh-tw': "強擊門牙",
			th: "คมเขี้ยวแข็งแกร่ง",
			id: "Gigi Diperkuat"
		},

		damage: "80+",

		effect: {
			ja: "このポケモンに「ポケモンのどうぐ」がついているなら、80ダメージ追加。",
			'zh-tw': "若這隻寶可夢附有「寶可夢道具」卡，則增加80點傷害。",
			th: "ถ้าโปเกมอนนี้มี [ไอเท็มติดโปเกมอน] ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			id: "Jika Pokémon ini mengenakan Pokémon Tool, kerusakan yang diberikan bertambah sejumlah 80."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card