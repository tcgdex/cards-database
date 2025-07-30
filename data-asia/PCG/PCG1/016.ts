import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "weepinbell",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [70],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "かみそりの葉",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "腐食性酸",
			},
			effect: {
				ja: "防御ポケモンは現在燃やされています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
