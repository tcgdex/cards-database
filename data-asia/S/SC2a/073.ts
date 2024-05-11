import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥偶巨人"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'zh-tw': "古代人城堡的牆壁裡那像炮台一樣的底座是為了讓泥偶巨人發射光束而建的。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "爆裂劈"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "泥偶巨人之錘"
		},

		damage: 180,
		cost: ["Psychic", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
