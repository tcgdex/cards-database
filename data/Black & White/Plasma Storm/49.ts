import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Electribonus",
				fr: "Électribonus",
			},
			effect: {
				en: "Discard a Lightning Energy card from your hand. If you do, draw 3 cards.",
				fr: "Défaussez une carte Énergie Lightning de votre main. Dans ce cas, piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
			},
			effect: {
				en: "Your opponent reveals his or her hand. This attack does 20 damage times the number of Trainer cards in your opponent's hand.",
				fr: "Votre adversaire montre sa main. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Dresseur dans la main de votre adversaire.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280789,
		tcgplayer: 88840
	}
}

export default card
