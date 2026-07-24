import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャオニクス",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "危険が 迫ると 耳を 持ち上げ １０トン トラックを ひねりつぶす サイコパワーを 解放する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ねこびより" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を3枚引く。その後、このポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "まどわすひとみ" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番の終わりまで、このワザを受けたポケモンの弱点は[超]タイプになる。［弱点は「x2」でダメージ計算をする。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557396,
			},
		},
	],

	evolveFrom: {
		ja: "ニャスパー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [678],
};

export default card;
