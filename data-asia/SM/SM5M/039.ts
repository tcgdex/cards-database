import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "カバルドン",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "体内に ためた 砂を 体の 穴から 噴き上げて 巨大な 竜巻を 作り 攻撃する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "すなじごく" },
			damage: 50,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "さじんほう" },
			damage: "100+",
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559852,
			},
		},
	],

	evolveFrom: {
		ja: "ヒポポタス",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [450],
};

export default card;
