import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'de-de': "Hippopotas"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		449,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Grainy Sand",
				'fr-fr': "Sable graineux",
				'de-de': "Grober Sand"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

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
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "Hippopotas does 10 damage to itself.",
				'fr-fr': "Hippopotas s'inflige 10 dégâts.",
				'de-de': "Hippopotas fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It enshrouds itself with sand to protect itself from germs. It does not enjoy getting wet.",
	},

	thirdParty: {
		cardmarket: 278115,
		tcgplayer: 86079
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
