import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ネッコアラ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "寝たまま 生まれ 寝たまま 死ぬ。 すべての 行動は みている 夢に よる 寝相 らしい。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぜったいねむり" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、手札からこのポケモンにエネルギーをつけるたび、このポケモンをねむりにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒプノロール" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザは、このポケモンがねむりなら、使える。このポケモンがねむりでないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561512,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [775],
};

export default card;
