import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'de-de': "Rayquaza"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dragon Aura",
				'fr-fr': "Aura de dragon",
				'de-de': "Dragon Aura"
			},
			effect: {
				'en-us': "As long as Rayquaza has any basic Fire Energy cards and any basic Lightning Energy cards attached to it, prevent all effects, except damage, by an opponent's attack done to Rayquaza.",
				'fr-fr': "Tant que Rayquaza possède des cartes Énergie de base  et , prévenez tous les effets, dégâts inclus, infligés à Rayquaza par une attaque de votre adversaire.",
				'de-de': "As long as Rayquaza has any basic  Energy cards and any basic  Energy card attached to it, prevent all effects, except damage, by an opponent's attack done to Rayquaza."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tumbling Attack",
				'fr-fr': "Attaque trébuchante",
				'de-de': "Tumbling Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88625,
				cardmarket: 276425
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88625,
				cardmarket: 276425
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 43053,
			},
		},
		{
			type: "normal",
			stamp: ["gym-challenge"],
			thirdParty: {
				tcgplayer: 213012,
			},
		},
		{
			type: "normal",
			stamp: ["pokemon-day"],
			languages: ['de']
		},
	],

}

export default card
