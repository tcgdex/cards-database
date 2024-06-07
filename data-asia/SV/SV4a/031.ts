import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "アチゲータ",
		'zh-tw': "炙燙鱷",
		th: "อาจิเกเตอร์",
		id: "Crocalor"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	dexId: [910],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "炎エネルギーと 有り余る 生命力が 交じり 頭上に タマゴ型の 火玉が 現れた。",
		'zh-tw': "火之能量與過剩的生命力相互結合，使得牠頭上 出現了蛋狀的火球。",
		th: "พลังงานไฟและพลังชีวิตที่มากล้นนั้นผสมผสานกันทำให้เกิดลูกไฟรูปไข่ขึ้นเหนือหัว",
		id: "Bola api berbentuk telur yang muncul di kepala Crocalor terbentuk oleh campuran energi api dan vitalitasnya yang melimpah."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひをはく",
			'zh-tw': "吐火",
			th: "พ่นอัคคี",
			id: "Memuntahkan Api"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ハイパーボイス",
			'zh-tw': "巨聲",
			th: "ไฮเปอร์วอยซ์",
			id: "Hyper Voice"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card