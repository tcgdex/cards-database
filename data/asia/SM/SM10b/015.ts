import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキメノコ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "雪山登山に 来た 山男を 氷漬けにし 棲家に 持ち帰る。 美男子 しか 狙われない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "うらみのといき" },
			damage: "20×",
			cost: ["Water"],
			effect: {
				ja: "このポケモンにダメカンを7個までのせ、のせた数×20ダメージ。",
			},
		},
		{
			name: { ja: "こごえるかぜ" },
			damage: 40,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557206,
			},
		},
	],

	evolveFrom: {
		ja: "ユキワラシ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [478],
};

export default card;
