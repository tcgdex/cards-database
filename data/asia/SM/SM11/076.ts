import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケッキング",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	description: {
		'ja-jp': "世界一 ぐうたらな ポケモン。 手が 届く 範囲の エサを 食べつくすと 居場所を 変える。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はんげき" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを4個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダイナミックスイング" },
			damage: "100+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、100ダメージ追加。その場合、次の相手の番、このポケモンが受けるワザのダメージは「+100」される。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557038,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤルキモノ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [289],
};

export default card;
