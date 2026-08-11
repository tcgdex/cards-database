import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラベトベトン",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "意外に 大人しく なつくが 餌の ゴミを ずっと あげていないと 家の 家具を 壊して 喰らいだす。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かがくのちから" },
			effect: {
				ja: "このポケモンがいるかぎり、おたがいの場・手札・トラッシュにあるたねポケモンの特性は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 90,
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560068,
			},
		},
	],

	evolveFrom: {
		ja: "アローラベトベター",
	},

	retreat: 4,
	rarity: "None",
	dexId: [89],
};

export default card;
