import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍王蠍"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'zh-tw': "雖然擁有劇毒，但只有在極少數的情況下才會使用。會用能敲爛汽車的怪力亂打一通。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "堅硬壓制"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "猛毒攻擊"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
