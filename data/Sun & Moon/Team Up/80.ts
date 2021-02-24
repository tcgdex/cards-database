import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		247,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Payback",
				fr: "Représailles",
			},
			effect: {
				en: "If your opponent has exactly 1 Prize card remaining, this attack does 90 more damage.",
				fr: "S’il reste exactement 1 carte Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
