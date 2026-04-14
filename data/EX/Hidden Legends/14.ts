import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
		de: "Tengulist"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Push Aside",
				fr: "Pousser de côté",
				de: "Push Aside"
			},
			effect: {
				en: "Look at your opponent's hand and choose 1 Basic Pokémon or Evolution card you find there. Your opponent puts it at the bottom of his or her deck.",
				fr: "Regardez la main de votre adversaire et choisissez 1 Pokémon de base ou une carte Évolution. Votre adversaire place cette carte au dessous de son deck.",
				de: "Look at your opponent's hand and choose 1 Basic Pokémon or Evolution card you find there. Your opponent puts it at the bottom of his or her deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Supernatural Power",
				fr: "Extrasenseur",
				de: "Supernatural Power"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 40 damage plus 40 more damage.",
				fr: "Si vous possédez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
				de: "If you have the same number of cards in your hand as your opponent, this attack does 40 damage plus 40 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276088,
		tcgplayer: 89154
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
