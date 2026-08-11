import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マシェード",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 100,
	types: ["Fairy"],

	description: {
		'ja-jp': "夜中に マシェードの棲む 森に いくのは 危険。 怪しい光に 惑わされ 二度と 帰れなくなる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はっこう" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分の山札にある[妖]ポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ゆれるほうし" },
			damage: 30,
			cost: ["Fairy", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560109,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ネマシュ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [756],
};

export default card;
