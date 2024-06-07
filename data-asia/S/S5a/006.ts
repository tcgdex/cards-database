import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "裙兒小姐",
		th: "เดรเดีย"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "因為美麗的模樣而受到其他寶可夢的喜愛。頭上的花如果疏於照料，很快就會腐爛枯萎。",
		th: "เพราะมีความงดงามจึงเป็นที่ชื่นชอบของโปเกมอนตัวอื่น ๆ ดอกไม้บนหัวนั้นหากขาดการดูแลจะเน่าเหี่ยวเฉาในทันที"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "搖晃鮮花",
			th: "ดอกไม้โงนเงน"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【睡眠】。若為反面，則將對手的戰鬥寶可夢【混亂】。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ [หลับ] ถ้าออกก้อย จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ [สับสน]"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card