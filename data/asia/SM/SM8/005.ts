import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガニウム",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'ja-jp': "メガニウムが 吐き出す 息には 枯れた 草木を よみがえらせる 力が 秘められている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "そうじゅくハーブ" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分の手札にある2進化ポケモンを1枚、そのポケモンへと進化する自分の場のたねポケモンにのせて進化させる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ソーラービーム" },
			damage: 110,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558644,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ベイリーフ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [154],
};

export default card;
