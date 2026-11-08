import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オシャマリ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "ダンスが 得意で 踊りながら 次々に 水の バルーンを 作りだし 敵に ぶつけるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スプラッシュ" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
		{
			name: { ja: "チャームボイス" },
			damage: 50,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561543,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アシマリ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [729],
};

export default card;
