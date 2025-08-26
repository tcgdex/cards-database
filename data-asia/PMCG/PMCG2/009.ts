import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "暗闇",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [44],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "毒パウダー",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},

		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "ファウル臭",
			},
			effect: {
				ja: "防御するポケモンと暗闇の両方が混乱しています（ダメージを与えた後）。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
