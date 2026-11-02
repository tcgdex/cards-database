import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "シビビール",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "相手に 巻きつき まるい はん点から 電気を 流して しびれたところを まるかじりする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "オーバースパーク" },
			damage: "30×",
			cost: ["Lightning"],
			effect: {
				ja: "このポケモンについている[雷]エネルギーをすべてトラッシュし、その枚数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556985,
			},
		},
	],

	evolveFrom: {
		ja: "シビシラス",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [603],
};

export default card;
