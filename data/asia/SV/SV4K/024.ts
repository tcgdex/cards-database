import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウミディグダ",
		'zh-tw': "海地鼠",
		'th-th': "อุมิดิกดา",
		'ko-kr': "바다그다"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [960],
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "２０メートル先の ミガルーサが 放つ 匂いも 嗅ぎとって 砂の中に 身を 隠すのだ。",
		'zh-tw': "就算身處於２０公尺外，牠都能嗅出輕身鱈散發出 的氣味，躲進沙子裡面藏身。",
		'th-th': "จะหลบซ่อนตัวในทรายเมื่อได้กลิ่นที่มิกาลูซาปล่อยออกมาแม้จะห่างออกไปกว่า 20 เมตร",
		'ko-kr': "20m 떨어진 가비루사에게서 나는 냄새도 맡을 수 있어서 모래 속에 몸을 숨긴다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "しんどう",
			'zh-tw': "震動",
			'th-th': "สั่นสะเทือน",
			'ko-kr': "진동"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741330,
				tcgplayer: 565779,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card