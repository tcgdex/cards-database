import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "モジャンボ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "植物の ツルで できた 腕を 伸ばして 獲物を 絡め取る。 腕を 食べられても へっちゃら。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しばりつける" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "クロロウィップ" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに[草]エネルギーが2個ついているなら、このポケモンのHPを「60」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558124,
			},
		},
	],

	evolveFrom: {
		ja: "モンジャラ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [465],
};

export default card;
