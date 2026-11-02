import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "キリキザン",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "どんなに 強い キリキザンでも 頭の 刃が 刃こぼれすると ボスの 座を 引退すると いう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おいつめる" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "スラッシュダウン" },
			damage: 80,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「スラッシュダウン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556694,
			},
		},
	],

	evolveFrom: {
		ja: "コマタナ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [625],
};

export default card;
