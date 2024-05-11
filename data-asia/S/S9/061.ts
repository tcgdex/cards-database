import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "臭臭泥"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "由於牠會散播病原菌，因此不斷遭到驅逐， 結果導致牠的數量急遽減少。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "污泥路"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的【中毒】的寶可夢【撤退】所需的能量增加1個。"
		}
	}],

	attacks: [{
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

	retreat: 3,
	regulationMark: "F"
}

export default card