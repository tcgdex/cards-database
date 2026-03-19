import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		de: "Liebiskus"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		370,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Loving Draw",
				fr: "Bonne pioche",
				de: "Loving Draw"
			},
			effect: {
				en: "Draw cards until you have the same number of cards in your hand as your opponent has in his or her hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez autant de cartes en main que votre adversaire.",
				de: "Draw cards until you have the same number of cards in your hand as your opponent has in his or her hand."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sweet Temptation",
				fr: "Douce tentation",
				de: "Sweet Temptation"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This attack does 10 damage to the new Defending Pokémon.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Cette attaque inflige 10 dégâts au nouveau Pokémon Défenseur.",
				de: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This attack does 10 damage to the new Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276114,
		tcgplayer: 86932
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
