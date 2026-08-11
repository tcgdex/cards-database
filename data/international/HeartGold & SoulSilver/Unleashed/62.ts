import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
		'de-de': "Habitak"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [21],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Roost",
				'fr-fr': "Atterrissage",
				'de-de': "Ruheort"
			},
			effect: {
				'en-us': "Remove 4 damage counters from Spearow. Spearow can't retreat during your next turn.",
				'fr-fr': "Retirez 4 marqueurs de dégât à Piafabec. Piafabec ne peut pas battre en retraite pendant votre prochain tour.",
				'de-de': "Entferne 4 Schadensmarken von Habitak. Habitak kann sich in deinem nächsten Zug nicht zurückziehen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flap",
				'fr-fr': "Battement",
				'de-de': "Flattern"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It flaps its short wings to flush out insects from tall grass. It then plucks them with its stubby beak."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89442,
				cardmarket: 279218
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89442,
				cardmarket: 279218
			}
		},
	],

}

export default card
