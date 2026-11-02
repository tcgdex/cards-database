import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ボーマンダ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],

	description: {
		ja: "ついに 生えた 翼で 大空を 駆け廻る。 うれしくて 火炎を 吐いて 一面を 焼け野原にする。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "りゅうのかぜ" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドラゴンクロー" },
			damage: 100,
			cost: ["Fire", "Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559026,
			},
		},
	],

	evolveFrom: {
		ja: "コモルー",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [373],
};

export default card;
