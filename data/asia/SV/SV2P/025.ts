import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "セビエ",
		'zh-tw': "涼脊龍",
		'th-th': "เซบิเอะ",
		'id-id': "Frigibax"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [996],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "背びれで 熱を 吸収して 氷エネルギーに 変換する。 高温ほど エネルギーが 溜まる。",
		'zh-tw': "會用背鰭吸收熱能以轉換成冰之能量。 溫度越高，累積的能量就越多。",
		'th-th': "ดูดซับความร้อนด้วยครีบหลังแล้วแปลงเป็นพลังงานน้ำแข็ง ยิ่งอุณหภูมิสูงก็ยิ่งสะสมพลังงานได้มากขึ้น",
		'id-id': "Frigibax menyerap panas menggunakan sirip punggungnya dan mengubahnya menjadi energi es. Makin panas suhunya, makin banyak energi yang terkumpul."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "ひんやり",
			'zh-tw': "寒意",
			'th-th': "เย็นยะเยือก",
			'id-id': "Sejuk"
		},

		damage: 10
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'ja-jp': "かみつく",
			'zh-tw': "咬住",
			'th-th': "กัดติด",
			'id-id': "Menggigit"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705258,
				tcgplayer: 567782,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card