import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロデスナ",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'ja-jp': "一粒の 砂にも 意思が ある。 小さな ポケモンを 呑み込み 生きたまま 生気を 奪う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ガードプレス" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
		{
			name: { ja: "じしん" },
			damage: 150,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554901,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "スナバァ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [770],
};

export default card;
