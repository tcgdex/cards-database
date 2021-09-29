import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Strip Bare",
				fr: "Croktou",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, your opponent discards all cards from his or her hand.",
				fr: "Lancez 2 pièces. Si vous obtenez deux fois un côté face, votre adversaire défausse toutes les cartes de sa main.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each damage counter on Sharpedo.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât placé sur Sharpedo.",
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It can swim at speeds of 75 mph by jetting seawater through its body. It is the bandit of the sea."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
