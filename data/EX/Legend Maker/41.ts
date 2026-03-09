import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		de: "Blanas"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		274,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'face",
				de: "Pfund"
			},

			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Plunder",
				fr: "Pillage",
				de: "Plündern"
			},
			effect: {
				en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur.",
				de: "Bevor der Schaden zugefügt wird, lege alle an dem Verteidigendem Pokémon angelegten Trainerkarten auf den Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276918,
		tcgplayer: 87822
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
