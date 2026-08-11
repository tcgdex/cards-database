import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Tirtouga",
		fr: "Carapagos",
		es: "Tirtouga",
		it: "Tirtouga",
		pt: "Tirtouga",
		de: "Galapaflos"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		564,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Shell Attack",
				fr: "Coquill-Attaque",
				es: "Ataque Caparazón",
				it: "Gusciattacco",
				pt: "Ataque Carapaça",
				de: "Muschelangriff"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
				es: "Alud de Rocas",
				it: "Macignata",
				pt: "Rocha Esmagadora",
				de: "Felsenquetscher"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It was restored from an ancient fossil. Tirtouga lived in the sea but came up onto the land to search for prey.",
	},

	thirdParty: {
		cardmarket: 388047,
		tcgplayer: 194965
	}
}

export default card
