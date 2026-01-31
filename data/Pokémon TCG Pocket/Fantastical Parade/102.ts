import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Skuntank"
	},

	illustrator: "sowsow",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Stunky"
	},

	description: {
		en: "It attacks by spraying a repugnant fluid from its\ntail, but the stench dulls after a few squirts."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Smokescreen Shot"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card