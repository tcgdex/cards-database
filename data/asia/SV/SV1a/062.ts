import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤングース",
		'zh-tw': "貓鼬少",
		'th-th': "ยังกูส",
		'id-id': "Yungoos"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [734],
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "胴体の ほとんどが 胃袋。 毎日 同じ ルートを うろつき 新鮮な エサを 探してまわる。",
		'zh-tw': "整個身體幾乎都是胃。每天都徘徊在固定的路線上， 四處尋找新鮮的食物。",
		'th-th': "ลำตัวเป็นกระเพาะอาหารแทบทั้งหมด วนไปวนมาตามเส้นทางเดิมทุกวันเพื่อสอดส่องหาอาหาร",
		'id-id': "Sebagian besar tubuhnya merupakan kantong lambung. Setiap hari, Yungoos berjalan-jalan pada jalur yang sama untuk mencari makanan segar."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "はねとばす",
			'zh-tw': "擊飛",
			'th-th': "ตบกระเด็น",
			'id-id': "Menghempaskan"
		},

		damage: "10+",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、10ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 10",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701116,
				tcgplayer: 568185,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card