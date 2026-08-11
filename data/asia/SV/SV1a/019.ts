import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アチゲータ",
		'zh-tw': "炙燙鱷",
		'th-th': "อาจิเกเตอร์",
		'id-id': "Crocalor"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	dexId: [910],
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "炎エネルギーと 有り余る 生命力が 交じり 頭上に タマゴ型の 火玉が 現れた。",
		'zh-tw': "火之能量與過剩的生命力相互結合，使得牠頭上 出現了蛋狀的火球。",
		'th-th': "พลังงานไฟและพลังชีวิตที่มากล้นนั้นผสมผสานกันทำให้เกิดลูกไฟรูปไข่ขึ้นเหนือหัว",
		'id-id': "Bola api berbentuk telur yang muncul di kepala Crocalor terbentuk oleh campuran energi api dan vitalitasnya yang melimpah."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "ひをはく",
			'zh-tw': "吐火",
			'th-th': "พ่นอัคคี",
			'id-id': "Memuntahkan Api"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "ハイパーボイス",
			'zh-tw': "巨聲",
			'th-th': "ไฮเปอร์วอยซ์",
			'id-id': "Hyper Voice"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701073,
				tcgplayer: 568142,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card