import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "デルビル",
		'zh-tw': "戴魯比",
		'th-th': "เดลวิล",
		'id-id': "Houndour"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [228],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "仲間に 連絡するときと 獲物を 追いつめるときでは 鳴き声の 種類が 違うのだ。",
		'zh-tw': "聯絡夥伴和追趕獵物的時候，會分別發出 不同種類的叫聲。",
		'th-th': "ชนิดของเสียงร้องที่ใช้ตอนสื่อสารกับฝูงกับตอนไล่ต้อนเหยื่อจะแตกต่างกัน",
		'id-id': "Jenis raungan Houndour ketika berkomunikasi dengan sesamanya atau ketika memburu mangsanya berbeda-beda."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "かみつく",
			'zh-tw': "咬住",
			'th-th': "กัดติด",
			'id-id': "Menggigit"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'ja-jp': "ほのお",
			'zh-tw': "火焰",
			'th-th': "ไฟ",
			'id-id': "Api"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693091,
				tcgplayer: 568243,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card