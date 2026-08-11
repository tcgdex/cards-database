import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ミツハニー",
		'zh-tw': "三蜜蜂",
		'th-th': "มิทซึฮันนี",
		'id-id': "Combee"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [415],
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "夜に なると １００匹 ほどの ミツハニーが 寄り添い合って 大きな かたまりで 眠る。",
		'zh-tw': "到了晚上就會有１００隻左右的三蜜蜂集聚成堆， 依偎著彼此睡覺。",
		'th-th': "มิทซึฮันนีกว่า 100 ตัวจะซุกตัวนอนกันเป็นก้อนใหญ่ ๆ ในตอนกลางคืน",
		'id-id': "Saat malam, sekitar 100 Combee berkumpul dan tidur bersama membentuk gumpalan besar."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ダブルスピン",
			'zh-tw': "雙重旋轉",
			'th-th': "ดับเบิ้ลสปิน",
			'id-id': "Double Spin"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705236,
				tcgplayer: 567760,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card