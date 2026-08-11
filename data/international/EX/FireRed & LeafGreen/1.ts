import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'de-de': "Bibor"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-venin",
				'de-de': "Poison Sting"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Link Needle",
				'fr-fr': "Dards en chaîne",
				'de-de': "Link Needle"
			},
			effect: {
				'en-us': "This attack does 50 damage plus 30 more damage for each Beedrill (excluding this one) you have in play.",
				'fr-fr': "Cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires pour chaque Dardargnan que vous avez en jeu (sans compter celui-ci).",
				'de-de': "This attack does 50 damage plus 30 more damage for each Beedrill (excluding this one)you have in play."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276177,
				tcgplayer: 83769
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276177,
				tcgplayer: 83769
			},
		}
	]
}

export default card
