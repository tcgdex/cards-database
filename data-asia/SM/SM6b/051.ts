import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ケッキング",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "世界一の ぐうたらだが たまった エネルギーを 一気に 出す ことで 恐ろしい パワーを 発揮する。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "なまけがお" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手の場のポケモンの特性（「なまけがお」をのぞく）は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はめつのいちげき" },
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559201,
			},
		},
	],

	evolveFrom: {
		ja: "ヤルキモノ",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [289],
};

export default card;
