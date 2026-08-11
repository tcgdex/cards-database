import { Card } from "models/database/card";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のヘルガー",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "口から 吹き出す 炎で 火傷すると いつまでたっても 傷口が うずいてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あくのひだね" },
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "バーンアウト" },
			damage: 120,
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821932,
				tcgplayer: 629041,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ロケット団のデルビル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [229],
};

export default card;
