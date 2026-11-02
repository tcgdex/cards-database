import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Bagon",
		fr: "Draby",
		de: "Kindwurm"
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
				en: "Risky Kick",
				fr: "Coup de pied risqué",
				de: "Risikokick"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				en: "Dragon Eye",
				fr: "Oeil de dragon",
				de: "Drachenauge"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
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
