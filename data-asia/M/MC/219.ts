import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ミガルーサ",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "高い 再生能力を 持つ。 体の 贅肉を 捨てて 身軽になり 獲物に 突撃。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "したごしらえ" },
			effect: {
				ja: "自分のトラッシュにある「ハイダイ」の枚数ぶん、このポケモンがワザを使うための[C]エネルギーは少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ソニックエッジ" },
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863515,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [976],
};

export default card;
