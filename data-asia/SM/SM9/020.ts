import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼニガメ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "甲羅に 閉じこもり 身を 守る。 相手の すきを 見逃さず 水を 噴き出して 反撃する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "こうらフロート" },
			effect: {
				ja: "場に自分のスタジアムが出ているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558298,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [7],
};

export default card;
