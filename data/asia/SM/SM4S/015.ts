import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "カラナクシ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "磯が 主な 棲みか。 生息地の 環境や 餌の 質で 色や 姿が 異なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さいせい" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "どろかけ" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560327,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [422],
};

export default card;
