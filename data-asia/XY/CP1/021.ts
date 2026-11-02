import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のサメハダー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "自慢の キバは 一撃必殺の 威力！ 油断している 敵を 確実に 仕留めるわ！",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アクアサーチ" },
			effect: {
				ja: "自分の山札から「アクア団」のポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。この特性は、自分の番に1回使える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "するどいキバ" },
			damage: 70,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563741,
			},
		},
	],

	evolveFrom: {
		ja: "アクア団のキバニア",
	},

	retreat: 0,
	rarity: "Rare",
	dexId: [319],
};

export default card;
