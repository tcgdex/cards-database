import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'de-de': "Kindwurm"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [371],

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
				'en-us': "Risky Kick",
				'fr-fr': "Coup de pied risqué",
				'de-de': "Risky Kick"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				'en-us': "Dragon Eye",
				'fr-fr': "Oeil de dragon",
				'de-de': "Dragon Eye"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
	],


	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83693,
				cardmarket: 275927
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83693,
				cardmarket: 275927
			},
		},
		{
			type: "normal",
			stamp: ["gen-con"],
			thirdParty: {
				tcgplayer: 281964,
				cardmarket: 275927
			},
		},
		{
			type: "normal",
			stamp: ["scrye"],
			thirdParty: {
				tcgplayer: 281964,
				cardmarket: 275927
			},
		},
		{
			type: "normal",
			stamp: ["inquest-gamer"],
			thirdParty: {
				tcgplayer: 281964,
				cardmarket: 275927
			},
		},
	],

}

export default card
