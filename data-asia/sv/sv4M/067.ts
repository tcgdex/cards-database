import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "レドームシ",
		th: "เรโดมุชิ"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	dexId: [825],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "殻の 中で 成長中。 サイコパワーで 外の 様子を うかがい 進化に 備えている。",
		th: "กำลังเติบโตอยู่ในกระดอง รับรู้สภาพการณ์ภายนอกด้วยพลังจิต กำลังเตรียมตัวเพื่อวิวัฒนาการ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "まもる",
			th: "ป้องกันตัว"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "しねんのずつき",
			th: "โขกหัวพลังจิต"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card