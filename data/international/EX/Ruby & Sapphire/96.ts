import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Chansey ex",
		'fr-fr': "Leveinard ex",
		'de-de': "Chaneira ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [113],

	hp: 120,

	stage: "Basic",
	types: [
		"Colorless"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Healing Egg",
				'fr-fr': "Oeuf guérisseur",
				'de-de': "Heilendes Ei"
			},
			effect: {
				'en-us': "Remove 2 damage counters (1 if there is only 1) from each of your Pokémon. Remove no damage counters from Chansey ex.",
				'fr-fr': "Retirez deux marqueurs de dégât (ou un seul s'il n'y en a qu'un) à chacun de vos Pokémon (sauf à Leveinard Ex).",
				'de-de': "Entferne 2 Schadensmarken (1 falls nur 1 vorhanden ist) von allen deinen Pokémon. Entferne keine Schadensmarken von Chaneira ex."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Austeiler"
			},
			effect: {
				'en-us': "Chansey ex does 60 damage to itself.",
				'fr-fr': "Leveinard Ex s'inflige 60 dégâts.",
				'de-de': "Chaneira ex fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84180,
				cardmarket: 275744
			}
		}
	]
}

export default card
