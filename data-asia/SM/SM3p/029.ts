import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "たくさんの ピカチュウを 集め 発電所を 造る 計画が 最近 発表 された。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アイアンテール" },
			damage: "20×",
			cost: ["Lightning"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560187,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [25],
};

export default card;
