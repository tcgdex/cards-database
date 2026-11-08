import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オドリドリ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "くれないのミツを 吸った オドリドリ。 情熱的な ステップで 敵の 身も 心も 焼き尽くす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みわくのサルサ" },
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "ヒートブラスト" },
			damage: 70,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558981,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [741],
};

export default card;
