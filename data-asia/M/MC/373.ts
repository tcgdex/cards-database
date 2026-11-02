import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "レジロック",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "最新の 科学技術を 使い 岩の 体を 調べたが 脳や 心臓を 見つけられなかった。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "がんせきアーマー" },
			effect: {
				ja: "このポケモンにエネルギーがついているなら、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バスターラリアット" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
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
