import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ダゲキ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "最強の からてチョップを 求めて 山奥に こもって 眠ることなく 修行する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ファストガード" },
			cost: ["Fighting"],
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。次の自分の番、このポケモンは「ファストガード」が使えない。",
			},
		},
		{
			name: { ja: "かわらわり" },
			damage: 40,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは、抵抗力と相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561030,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [539],
};

export default card;
