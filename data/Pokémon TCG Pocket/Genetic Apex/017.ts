import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Venomoth",
		fr: "Aéromite"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Poison Powder",
			fr: "Poudre Toxik"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.",
		fr: "Ses ailes sont couvertes d'écailles poudreuses. À chaque battement d'ailes, il laisse tomber de la poudre hautement toxique."
	}
}

export default card
