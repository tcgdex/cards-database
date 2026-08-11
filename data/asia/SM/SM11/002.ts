import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "メガヤンマ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "高速で 飛んで すれ違った 相手の 首を 一瞬で かみちぎる 戦い方を 好む。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "エアスラッシュ" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556961,
			},
		},
	],

	evolveFrom: {
		ja: "ヤンヤンマ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [469],
};

export default card;
