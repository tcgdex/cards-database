import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Salamence-EX",
		fr: "M-Drattak-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 230,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Salamence-EX",
		fr: "Drattak-EX"
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Savage Wing",
				fr: "Aile Sauvage"
			},
			effect: {
				en: "Discard as many basic Fire Energy attached to this Pokémon as you like. This attack does 40 more damage for each Energy card discarded in this way.",
				fr: "Défaussez autant d'Énergies  attachées à ce Pokémon que vous voulez. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
