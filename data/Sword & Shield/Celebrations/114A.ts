import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [644],
	set: Set,

	name: {
		en: "Zekrom",
		fr: "Zekrom"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Outrage",
			fr: "Broyeur de Terrain"
		},

		effect: {
			en: "Does 10 more damage for each damage counter on this Pokémon.",
			fr: "Si votre adversaire a un Stade en jeu, défaussez-le."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Bolt Strike",
			fr: "Tonnerre Blanc"
		},

		effect: {
			en: "This Pokémon does 40 damage to itself.",
			fr: "Si Reshiram est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "This Pokémon appears in legends. In its tail, it has a giant generator that creates electricity."
	},

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
		cardmarket: 576755
	}
}

export default card
