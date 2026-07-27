import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "アンバランス かつ 不安定な 遺伝子を 持っており 様々な 進化の 可能性を 秘めている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フレンズパレット" },
			damage: "10×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンのタイプの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560116,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [133],
};

export default card;
