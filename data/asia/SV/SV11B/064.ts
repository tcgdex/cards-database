import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バルジーナ",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'ja-jp': "骨を 拾い 集めて 巣作り。 弱った 獲物を 脚で つかみ 骨の 巣まで 軽々と 運ぶ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "えものをねらう" },
			effect: {
				'ja-jp': "自分の番に1回使える。相手の手札を見て、その中から、HPが「70」以下のたねポケモンを1枚選び、相手のベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "カッターウインド" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		'ja-jp': "バルチャイ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [630],

	thirdParty: {
		cardmarket: 828589,
		tcgplayer: 636418,
	},
};

export default card;
