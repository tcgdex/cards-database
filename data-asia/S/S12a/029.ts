import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪納霏",
		th: "มานาฟี",
		ja: "マナフィ"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "有著能與任何寶可夢心意相通的神奇能力。",
		th: "มีพลังอันน่าพิศวงที่ทำให้สื่อใจกับโปเกมอนทุกประเภทได้",
		ja: "どんな ポケモンとでも 心を 通い合わせる ことが できる 不思議な 能力を 持っている。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "浪之幕",
			th: "ม่านคลื่นน้ำ",
			ja: "なみのヴェール"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢不會受到對手的招式的傷害。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัวจะไม่ได้รับแดเมจจากท่าต่อสู้ของฝ่ายตรงข้าม",
			ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "潑水",
			th: "สาดน้ำ",
			ja: "みずかけ"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [490]
}

export default card