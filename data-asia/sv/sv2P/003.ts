import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ミツハニー",
		'zh-tw': "三蜜蜂",
		th: "มิทซึฮันนี",
		id: "Combee"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [415],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "夜に なると １００匹 ほどの ミツハニーが 寄り添い合って 大きな かたまりで 眠る。",
		'zh-tw': "到了晚上就會有１００隻左右的三蜜蜂集聚成堆， 依偎著彼此睡覺。",
		th: "มิทซึฮันนีกว่า 100 ตัวจะซุกตัวนอนกันเป็นก้อนใหญ่ ๆ ในตอนกลางคืน",
		id: "Saat malam, sekitar 100 Combee berkumpul dan tidur bersama membentuk gumpalan besar."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルスピン",
			'zh-tw': "雙重旋轉",
			th: "ดับเบิ้ลสปิน",
			id: "Double Spin"
		},

		damage: "10×",

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card