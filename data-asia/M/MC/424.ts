import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "スナノケガワ",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "捕獲例は ゼロ。 データ不足。 ある 探検記に 記された 生物と 特徴が 一致する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じばさくれつ" },
			damage: "20+",
			cost: ["Fighting"],
			effect: {
				ja: "自分の場にエネルギーが3個以上あるなら、70ダメージ追加。このワザのダメージは弱点を計算しない。",
			},
		},
		{
			name: { ja: "パワージェム" },
			damage: 60,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863726,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [989],
};

export default card;
