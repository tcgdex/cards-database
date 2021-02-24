import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Duosion",
		fr: "Méios",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		578,
	],
	hp: 60,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Solosis",
		fr: "Nucléos",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Double Link",
				fr: "Double Lien",
			},
			effect: {
				en: "If Solosis is on your Bench, this attack does 30 more damage. If Duosion is on your Bench, this attack does 60 more damage.",
				fr: "Si Nucléos est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires. Si Méios est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
