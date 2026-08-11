import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "カエンジシ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "摂氏６０００度の 息を 吐き出し 激しく 相手を 威嚇する。 メスが 群れの 子供を 守る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ヒートブラスト" },
			damage: 90,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558904,
			},
		},
	],

	evolveFrom: {
		ja: "シシコ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [668],
};

export default card;
