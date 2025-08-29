import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "weepinbell",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [70],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "毒パウダー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "かみそりの葉",
			},
			damage: 30,
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
