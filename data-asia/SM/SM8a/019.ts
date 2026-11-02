import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラベトベトン",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "意外に 大人しく なつくが 餌の ゴミを ずっと あげていないと 家の 家具を 壊して 喰らいだす。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いかものぐい" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の山札を上から6枚見て、その中にあるグッズを、好きなだけトラッシュする。残りのカードは山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダストシュート" },
			damage: 80,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558593,
			},
		},
	],

	evolveFrom: {
		ja: "アローラベトベター",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [89],
};

export default card;
