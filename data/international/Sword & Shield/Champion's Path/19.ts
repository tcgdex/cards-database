import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Hattrem",
		'fr-fr': "Chapotus",
		'es-es': "Hattrem",
		'it-it': "Hattrem",
		'pt-br': "Hattrem",
		'de-de': "Brimano"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [857],
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Hatenna",
		'fr-fr': "Bibichut"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'es-es': "Toque",
				'it-it': "Battuta",
				'pt-br': "Pulso",
				'de-de': "Verprügler"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Super Psy Bolt",
				'fr-fr': "Super Psy",
				'es-es': "Superrayo Psi",
				'it-it': "Superpsico",
				'pt-br': "Super-raio Psíquico",
				'de-de': "Super-Psischlag"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
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

	stage: "Stage1",

	description: {
		'en-us': "No matter who you are, if you bring strong emotions near this Pokémon, it will silence you violently."
	},

	thirdParty: {
		cardmarket: 499950,
		tcgplayer: 223012
	}
}

export default card
