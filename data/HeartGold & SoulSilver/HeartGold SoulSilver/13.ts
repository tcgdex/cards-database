import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoke",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Double Return",
				fr: "Double retour",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Wobbuffet.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts sur Qulbutoke.",
			},
			damage: 20,

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
