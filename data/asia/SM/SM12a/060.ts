import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャオニクス",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "危険が 迫ると 耳を 持ち上げ １０トン トラックを ひねりつぶす サイコパワーを 解放する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ねこびより" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を3枚引く。その後、このポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "まどわすひとみ" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番の終わりまで、このワザを受けたポケモンの弱点は[超]タイプになる。［弱点は「x2」でダメージ計算をする。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543841,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニャスパー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [678],
};

export default card;
