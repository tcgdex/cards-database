import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "メガニウム",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "メガニウムが 吐き出す 息には 枯れた 草木を よみがえらせる 力が 秘められている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "そうじゅくハーブ" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある2進化ポケモンを1枚、そのポケモンへと進化する自分の場のたねポケモンにのせて進化させる。",
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
		ja: "ベイリーフ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [154],
};

export default card;
