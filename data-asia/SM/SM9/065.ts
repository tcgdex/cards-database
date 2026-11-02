import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリュー",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "荒れ狂う 海も ものともせずに 飛んでいく。 その姿を 見かけた 船長は 海の化身と 呼んだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ファーストコール" },
			effect: {
				ja: "自分の番に1回使える。自分の山札にあるサポートを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドラゴンクロー" },
			damage: 120,
			cost: ["Water", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558391,
			},
		},
	],

	evolveFrom: {
		ja: "ハクリュー",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [149],
};

export default card;
