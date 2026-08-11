import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "デンチュラex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アッパースレッド" },
			damage: "110+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンex・V」なら、110ダメージ追加。",
			},
		},
		{
			name: { ja: "フルグライト" },
			damage: 180,
			cost: ["Grass", "Lightning", "Fighting"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。次の相手の番、相手は手札からグッズを出して使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863551,
			},
		},
	],

	evolveFrom: {
		ja: "バチュル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [596],

	suffix: "EX",
};

export default card;
