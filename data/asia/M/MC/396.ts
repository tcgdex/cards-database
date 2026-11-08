import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コジョンド",
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'ja-jp': "腕の 体毛を ムチのように あつかう。 両腕の 攻撃は 目にも 止まらぬ 速さ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ローキック" },
			damage: 40,
			cost: ["Fighting"],
		},
		{
			name: { ja: "スマッシュアッパー" },
			damage: 80,
			cost: ["Fighting", "Fighting"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863698,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コジョフー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [620],
};

export default card;
