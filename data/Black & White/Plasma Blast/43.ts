import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Duosion",
		fr: "Méios",
		es: "Duosion",
		it: "Duosion",
		pt: "Duosion",
		de: "Mitodos"
	},

	illustrator: "match",
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
		de: "Monozyto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Focused Wish",
				fr: "Vœu Fervent",
				de: "Gezielter Wunsch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
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

	retreat: 1,

	description: {
		en: "When their two divided brains think the same thoughts, their psychic power is maximized.",
		de: "Wenn beide Hälften seines gespaltenen Denkapparates an dasselbe denken, sind seine Psycho-Kräfte am stärksten."
	},

	thirdParty: {
		cardmarket: 281064,
		tcgplayer: 85018
	}
}

export default card
