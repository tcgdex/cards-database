import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'de-de': "Scherox"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Special Blow",
				'fr-fr': "Coup spécial",
				'de-de': "Spezialschlag"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 50 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède des cartes Énergie Spéciale, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires.",
				'de-de': "Wenn am Verteidigendem Pokémon mindestens 1 Spezialenergiekarte angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "X-Scissor",
				'fr-fr': "Plaie-Croix",
				'de-de': "Kreuzschere"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 damage plus 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 50 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a steel-hard body. It intimidates foes by upraising its eye-patterned pincers.",
	},

	thirdParty: {
		cardmarket: 278078,
		tcgplayer: 88961
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["tristan-robinson"]
		}
	]
}

export default card
