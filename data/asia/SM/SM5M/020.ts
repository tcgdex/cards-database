import { Card } from "models/database/card";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レントラー",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'ja-jp': "レントラーの 透視能力は 危険な ものを 発見するとき とても 役に立つのだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いかくのキバ" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは、すべて「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ボルテージアロー" },
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[雷]エネルギーをすべてトラッシュし、相手のポケモン1匹に、150ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559833,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ルクシオ",
	},

	retreat: 0,
	rarity: "Rare",
	dexId: [405],
};

export default card;
