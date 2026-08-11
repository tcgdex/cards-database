import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒスイ バスラオ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'ja-jp': "温厚な 気質など 相違点 あれども バスラオの 特徴を 多く 有すゆえ そのリージョンフォームと 定義す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっそりもぐる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このワザは、後攻プレイヤーの最初の番にだけ使える。次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650951,
				tcgplayer: 597452,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [550],
};

export default card;
