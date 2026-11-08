import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テツノイバラex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "イニシャライズ" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるかぎり、おたがいの場の「ルールを持つポケモン」（「未来」のポケモンをのぞく）の特性は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ボルトサイクロン" },
			damage: 140,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863578,
			},
		},
	],

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [995],

	suffix: "EX",
};

export default card;
