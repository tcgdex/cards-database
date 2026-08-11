import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マシェード",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "点滅する 胞子を 吹き出し 眠りに 誘う。 眠った 獲物の 精気を 吸い取る。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はっこう" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分の山札にある[草]ポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ゆれるほうし" },
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561609,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ネマシュ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [756],
};

export default card;
