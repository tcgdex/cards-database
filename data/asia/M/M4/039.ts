import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オーロット",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'ja-jp': "根っこを 神経の かわりにして 森の 木を 操る。 体に 棲みついた ポケモンには 親切。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "のろいのねっこ" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、手札から出すエネルギーをつけられない。",
			},
		},
		{
			name: { ja: "オーバーペイン" },
			damage: "60+",
			cost: ["Psychic", "Psychic"],
			effect: {
				'ja-jp': "相手のポケモン全員にのっているダメカンの数×10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 876938,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ボクレー",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [709],
};

export default card;
