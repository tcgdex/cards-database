import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドン",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "金属の ボディは 頑丈だが 熱が こもってしまうので 尻尾の スリットから 放熱している。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 30,
			cost: ["Metal"],
		},
		{
			name: { ja: "レイジングハンマー" },
			damage: "80+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861364,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861722,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861723,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [884],
};

export default card;
