import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ドラメシヤ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Scav",
	dexId: [885],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "食べもしないのに ウデッポウに 食らいつくのは 生きていたころの 行動の 名残りと 言われている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ちょっとうらむ"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			ja: "かみつく"
		},

		damage: 40
	}],

	retreat: 1
}

export default card
