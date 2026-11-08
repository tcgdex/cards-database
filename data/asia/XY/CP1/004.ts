import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アクア団のトドグラー",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "氷の道を 作って サポートして くれるんだ。 氷の上なら どんな バトルでも 勝てるぜ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みずとばし" },
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "相手のポケモンを1匹選び、20ダメージ。［ベンチは弱点・抵抗力の計算をしない。］",
			},
		},
		{
			name: { ja: "ひょうのかぜ" },
			damage: "60+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「マグマ団」のポケモンなら、60ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563724,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アクア団のタマザラシ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [364],
};

export default card;
