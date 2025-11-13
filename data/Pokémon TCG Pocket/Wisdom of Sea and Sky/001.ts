import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Oddish",
		fr: "Mystherbe"
	},

	illustrator: "ryoma uratsuka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "If exposed to moonlight, it starts to move.\nIt roams far and wide at night to scatter its seeds.",
		fr: "Il ne bouge que lorsqu'il est exposé aux rayons de la lune. Il se déplace alors pour disséminer ses graines."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Powder",
			fr: "Poudre Toxik"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card