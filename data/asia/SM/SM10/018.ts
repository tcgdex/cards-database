import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "エンニュート",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "洞窟の 奥深くに 棲み フェロモンで メロメロに した ヤトウモリたちを 侍らせている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あぶりだす" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある[炎]エネルギーを1枚トラッシュする。その後、山札を3枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 60,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557373,
			},
		},
	],

	evolveFrom: {
		ja: "ヤトウモリ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [758],
};

export default card;
