import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "綺麗な 水辺が 主な 棲み処。 外敵に 襲われそうに なると 水に 飛び込み 姿を 隠す。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バイタルエール" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の「イーブイ」から進化する「ポケモンGX」全員の最大HPは、それぞれ「60」大きくなる。この効果は、この特性を持つポケモンが何匹いても、重ならない",
			},
		},
	],

	attacks: [
		{
			name: { ja: "キュアレイン" },
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "分のポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543556,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "None",
	dexId: [134],
};

export default card;
