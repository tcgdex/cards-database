import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Precognitive Aura",
				'fr-fr': "Aura Prémonitoire",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if you have Garchomp in play, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si vous avez Carchacrok en jeu, vous pouvez chercher une carte dans votre deck puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Missile Jab",
				'fr-fr': "Coup Propulsé",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "They can detect the species of a living being—and its emotions—from over half a mile away. They control auras and hunt their prey in packs.",
	},
}

export default card
