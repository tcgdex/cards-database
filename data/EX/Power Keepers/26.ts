import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Anorith",
		fr: "Anorith"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		347,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Claw Fossil",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Solid Shell",
				fr: "Coquille dure"
			},
			effect: {
				en: "Any damage done to Anorith by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Anorith par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 30 more damage. If all of them are heads, this attack does 10 damage plus 50 more damage.",
				fr: "Lancez 3 pièces. S'il y a 1 face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. S'il y a 2 faces, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires. Si ce ne sont que des faces, cette attaque inflige 10 dégâts plus 50 dégâts supplémentaires."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
