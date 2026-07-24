import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Professor Elm's Training Method",
		fr: "Méthode d'entraînement du professeur Orme",
		de: "Professor Linds Trainingsmethoden"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			},
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Lightning",
			],
			name: {
				en: "Aquabomb",
			},
			effect: {
				en: "Kindra does 10 damage to itself. (Don't apply Weakness or Resistance when Kingdra damages itself with this attack.)",
			},
			damage: 40,
		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dual Burn",
			},
			effect: {
				en: "Flip 2 coins. For each tails, discard 1 Energy card attached to Kingdra.",
			},
			damage: 60,
		},
	],
	stage: "Stage2",
	types: [
		"Colorless"
	],
	hp: 110,
	dexId: [230],
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		fr: "Cherchez une carte Évolution dans votre deck, montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach einer Entwicklungskarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88389,
				cardmarket: 275023
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88389,
				cardmarket: 275023
			},
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 477418,
			},
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				tcgplayer: 477420,
			},
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				tcgplayer: 477419,
			},
		}
	],
	retreat: 3,
}

export default card
