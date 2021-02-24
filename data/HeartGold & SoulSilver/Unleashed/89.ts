import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		217,
	],
	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Berserk",
				fr: "Fou-furieux",
			},
			effect: {
				en: "If Ursaring has any damage counters on it, each of Ursaring's attacks does 60 more damage (before applying Weakness and Resistance).",
				fr: "Si Ursaring a des marqueurs de dégât, chacune de ses attaques inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
				fr: "Marto-Poing",
			},
			effect: {
				en: "Discard the top card from your opponent's deck.",
				fr: "Défaussez la première carte du dessus du deck de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Megaton Lariat",
				fr: "Lasso titanesque",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
