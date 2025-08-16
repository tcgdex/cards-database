import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Rolycoly",
		fr: "Charbi",
		es: "Rolycoly",
		it: "Rolycoly",
		pt: "Rolycoly",
		de: "Klonkett"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [837],
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Most of its body has the same composition as coal. Fittingly, this Pokémon was first discovered in coal mines about 400 years ago."
	},

	thirdParty: {
		cardmarket: 500010,
		tcgplayer: 223023
	}
}

export default card
