import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "オニシズクモ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "頭部の 水泡で ヘッドバット。 小さなポケモンで あれば そのまま 水泡に 取り込まれ 溺れ死ぬ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バブルネット" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、手札からエネルギーを出してつけられない。",
			},
		},
		{
			name: { ja: "するどいキバ" },
			damage: 80,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561072,
			},
		},
	],

	evolveFrom: {
		ja: "シズクモ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [752],
};

export default card;
