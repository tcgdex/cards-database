import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキカブリ",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "寒い 季節は 山の ふもとまで 降りてくるが 春に なると 雪が 残る 山頂に 戻っていく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こなゆき" },
			damage: 10,
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
			type: "normal",
			thirdParty: {
				cardmarket: 557207,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [459],
};

export default card;
