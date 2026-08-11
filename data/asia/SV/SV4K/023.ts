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

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [960],
	hp: 50,
	types: ["Water"],

	description: {
		'ja-jp': "２０メートル先の ミガルーサが 放つ 匂いも 嗅ぎとって 砂の中に 身を 隠すのだ。",
		'zh-tw': "就算身處於２０公尺外，牠都能嗅出輕身鱈散發出 的氣味，躲進沙子裡面藏身。",
		'th-th': "จะหลบซ่อนตัวในทรายเมื่อได้กลิ่นที่มิกาลูซาปล่อยออกมาแม้จะห่างออกไปกว่า 20 เมตร",
		'ko-kr': "20m 떨어진 가비루사에게서 나는 냄새도 맡을 수 있어서 모래 속에 몸을 숨긴다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "みだれずつき",
			'zh-tw': "亂爆頭錘",
			'th-th': "พุ่งหัวชนแหลก",
			'ko-kr': "마구박치기"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'ko-kr': "동전을 3번 던져서 앞면이 나온 수 × 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741328,
				tcgplayer: 565778,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card