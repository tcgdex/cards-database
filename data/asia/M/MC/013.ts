import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "モジャンボ",
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "自在に 伸びる ２本の 腕は じつは ツルが 束になったものと 最近の 研究で わかった。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みつりんボディ" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "おおいかぶさる 150-" },
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863300,
			},
		},
	],

	evolveFrom: {
		ja: "モンジャラ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [465],
};

export default card;
