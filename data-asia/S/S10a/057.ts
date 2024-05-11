import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 黏美龍VSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Dragon"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "潤濕星星"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。將這隻寶可夢的HP全部恢復。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "鐵之回轉"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-80」點。"
		},

		damage: 200,
		cost: ["Water", "Metal", "Colorless"]
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card