import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イワンコ",
		'zh-tw': "岩狗狗",
		'th-th': "อิวังโค"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [744],
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "小さいころは よく 懐く。 育つと 気性が 荒くなるが 主への 恩は 忘れない。",
		'zh-tw': "年幼時期非常容易親近。雖然長大後脾氣會變得粗暴，卻絕不會忘記主人的恩情。",
		'th-th': "ตอนยังเล็กค่อนข้างเชื่อง พอโตแล้วดุร้ายขึ้น แต่ไม่ลืมบุญคุณเจ้าของ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "かみつく",
			'zh-tw': "咬住",
			'th-th': "กัดติด"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 724008,
				tcgplayer: 567015,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card