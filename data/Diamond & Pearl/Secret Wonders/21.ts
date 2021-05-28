import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Baleful Wind",
				fr: "Vent menaçant",
			},
			effect: {
				en: "Choose a card from your opponent's hand without looking and discard it. If you discarded a Trainer, Supporter, or Stadium card, choose 1 more card from your opponent's hand without looking and discard it.",
				fr: "Choisissez sans regarder une carte de la main de votre adversaire et défaussez-la. Si vous avez défaussé une carte Dresseur, Supporter ou Stade, choisissez sans regarder 1 autre carte de la main de votre adversaire et défaussez-la.",
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Dark Raid",
				fr: "Razzia obscure",
			},
			effect: {
				en: "If you played Absol from your hand during this turn, this attack's base damage is 40 instead of 10.",
				fr: "Si vous avez joué Absol de votre main lors de ce tour, les dégâts de base de cette attaque sont de 40 au lieu de 10.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
