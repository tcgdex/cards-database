import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラベトベトン",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "意外に 大人しく なつくが 餌の ゴミを ずっと あげていないと 家の 家具を 壊して 喰らいだす。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かがくのちから" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、おたがいの場・手札・トラッシュにあるたねポケモンの特性は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 90,
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561624,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アローラベトベター",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [89],
};

export default card;
