import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		en: "Mewtwo EX",
		fr: "Mewtwo-EX"
	},

	illustrator: "Shizurow",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "X Ball",
			fr: "X Ball"
		},

		effect: {
			en: "Does 20 damage times the amount of Energy attached to this Pokémon and the Defending Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon et au Pokémon Défenseur."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Psydrive",
			fr: "Psykoforce"
		},

		effect: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachées à ce Pokémon."
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576792
	}
}

export default card
