import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マメバッタ",
		'zh-tw': "豆蟋蟀",
		'th-th': "มาเมะบัตตะ",
		'ko-kr': "콩알뚜기"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [919],
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "第３の脚が 畳まれている。 ピンチになると １０メートル以上 ジャンプする 脚力を 持つ。",
		'zh-tw': "總是將第３對腳折起來。擁有在遇到危機時能夠 跳超過１０公尺的跳躍力。",
		'th-th': "พับขาที่ 3 เอาไว้ มีพลังขาที่สามารถกระโดดได้สูงกว่า 10 เมตรเมื่อตกอยู่ในสถานการณ์คับขัน",
		'ko-kr': "제3의 다리가 접혀 있다. 위기에 처하면 10m 이상을 점프하는 다릿심을 가지고 있다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "はねまわる",
			'zh-tw': "活蹦亂跳",
			'th-th': "สะบัดตัว",
			'ko-kr': "돌아다니며 뛰기"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741224,
				tcgplayer: 565764,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card