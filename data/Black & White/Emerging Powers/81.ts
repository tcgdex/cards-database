import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Tranquill",
		fr: "Colombeau",
		es: "Tranquill",
		it: "Tranquill",
		pt: "Tranquill",
		de: "Navitaub"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		520,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidove",
		fr: "Poichigeon",
		de: "Dusselgurr"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Claw",
				fr: "Ergots",
				de: "Klaue"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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
				en: "Wing Attack",
				fr: "Cru-Aile",
				de: "Flügelschlag"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Many people believe that, deep in the forest where Tranquill live, there is a peaceful place where there is no war.",
		de: "Viele Leute glauben, dass es tief in seinem heimatlichen Wald ein Land der Harmonie gibt, wo man keine Kriege kennt."
	},

	thirdParty: {
		cardmarket: 280046,
		tcgplayer: 90015
	}
}

export default card
