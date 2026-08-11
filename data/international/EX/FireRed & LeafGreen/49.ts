import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Venomoth",
		'fr-fr': "Aéromite",
		'de-de': "Omot"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Protective Dust",
				'fr-fr': "Poussière Protectrice",
				'de-de': "Protective Dust"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, except damage, done to Venomoth by the Attacking Pokémon.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts exclus, infligés à Aéromite par le Pokémon Attaquant.",
				'de-de': "Prevent all effects of attacks, except damage, done to Venomoth by the Attacking Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Poison",
				'fr-fr': "Poison dodo",
				'de-de': "Sleep Poison"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				'de-de': "The Defending Pokémon is now Asleep and Poisoned."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Wind",
				'fr-fr': "Coupe-vent",
				'de-de': "Razor Wind"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 60,

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
			type: "normal",
			thirdParty: {
				cardmarket: 276225,
				tcgplayer: 90301
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276225,
				tcgplayer: 90301
			},
		},
	],
}

export default card
