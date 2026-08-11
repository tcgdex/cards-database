import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードン",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		ja: "地上 １４００メートルまで 羽を 使って 飛ぶことができる。 高熱の 炎を 吐く。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かくごのほのお" },
			effect: {
				ja: "このポケモンが使うワザの、相手のバトルポケモンへのダメージは、相手の場の「ポケモンGX・EX」1匹につき「+30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ファイヤーブラスト" },
			damage: 130,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559239,
			},
		},
	],

	evolveFrom: {
		ja: "リザード",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [6],
};

export default card;
