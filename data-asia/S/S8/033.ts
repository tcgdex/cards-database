import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鍬農炮蟲"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'zh-tw': "如果牠在飛行時把蟲電寶抱住當作備用電池，就能連續發射電力超高的電磁光束。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "電氣引爆"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的2個【雷】能量丟棄，對手的1隻寶可夢受到200點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning", "Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card