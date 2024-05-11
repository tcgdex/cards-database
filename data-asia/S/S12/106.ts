import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "坦克臭鼬V"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "追打炸彈"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢受到30點傷害。在上個對手的回合，若那隻寶可夢從戰鬥場撤退，則這個招式的傷害改為「120」點。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "絕境猛毒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【混亂】。"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card