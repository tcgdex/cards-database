import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre",
		de: "Lombrero"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		271,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
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
				de: "Bevor der Schaden zugefügt wird, lege alle an dem Verteidigenden Pokémon angelegten Trainerkarten auf den Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
				de: "Wellenplatscher"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277118,
		tcgplayer: 86818
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
