import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Méthode d'entraînement du professeur Orme",
		de: "Professor Linds Trainingsmethoden"
	},

	illustrator: "Mikio Menjo",
	rarity: "Uncommon",
	category: "Pokemon",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "Whenever you attach a Water, Lightning, or Psychic basic Energy card from your hand to Kingdra, Kingdra's type (color) becomes the same as that Energy card type until the end of the turn.",
			},
		},
	],,
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],,
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
	],,
	stage: "Stage2",
	types: [
		"Colorless"
	],
	hp: 110,
	dexId: [230],
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
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	],
	retreat: 3,
}

export default card
