import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Directing Traffic",
				fr: "Diriger la Circulation",
			},
			effect: {
				en: "Look at the top 5 cards of your deck and put them back in any order.",
				fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Cross Chop",
				fr: "Coup-Croix",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
