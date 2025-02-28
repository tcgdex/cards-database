import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Manectric"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electrike"
	},

	description: {
		en: "It stimulates its own muscles with electricity, so<br />it can move quickly. It eases its soreness with<br />electricity, too, so it can recover quickly as well."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flash"
		},

		damage: 40,
		cost: ["Lightning"],

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card