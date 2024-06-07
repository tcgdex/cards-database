import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火神蛾",
		th: "อุลกามอธ",
		ja: "ウルガモス"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "據說牠會飛灑火焰鱗粉造成火災，也有說法說牠會去 救助受寒冷所苦的生物。",
		th: "ที่มันโปรยเกล็ดไฟนั้น บ้างก็ว่าเพื่อทำให้เกิดไฟไหม้ บ้างก็ว่าเพื่อช่วยเหลือสิ่งต่าง ๆ ที่ทุกข์ทรมานจากความหนาวเย็น",
		ja: "炎の りんぷんを 振りまき 火事を 起こすとも 寒さに 苦しむものを 救うとも いう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鬼火",
			th: "ลูกไฟวิญญาณ",
			ja: "おにび"
		},

		damage: 40,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火山高溫",
			th: "โวลเคนิกฮีต",
			ja: "ボルカニックヒート"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 120,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [637]
}

export default card