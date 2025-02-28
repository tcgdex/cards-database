import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Weezing"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Koffing"
	},

	description: {
		en: "If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Smokescreen"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
