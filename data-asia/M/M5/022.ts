import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ラクライ",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "静電気を 体毛に 蓄えて 放電する。 嵐が 近づくと 全身から 火花を 散らす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888264,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [309],
};

export default card;
