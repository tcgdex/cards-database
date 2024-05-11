import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海刺龍"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "是由雄性來養育孩子。在育兒時，背上刺的 毒素會變得更強更濃。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "隨興游水"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "水炮射"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到這隻寶可夢，身上附加的【水】能量的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card