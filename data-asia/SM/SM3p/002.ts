import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギソウ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "つぼみが 背中に ついていて 養分を 吸収していくと 大きな 花が 咲くという。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はっぱカッター" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
		{
			name: { ja: "もうどくのムチ" },
			damage: 50,
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくとこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560160,
			},
		},
	],

	evolveFrom: {
		ja: "フシギダネ",
	},

	retreat: 4,
	rarity: "Common",
	dexId: [2],
};

export default card;
