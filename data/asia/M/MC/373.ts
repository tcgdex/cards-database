import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レジロック",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "最新の 科学技術を 使い 岩の 体を 調べたが 脳や 心臓を 見つけられなかった。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "がんせきアーマー" },
			effect: {
				'ja-jp': "このポケモンにエネルギーがついているなら、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バスターラリアット" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863675,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [377],
};

export default card;
