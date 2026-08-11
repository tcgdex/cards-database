import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポカブ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "敵の 攻撃を 身軽に 避けて 鼻から 火の玉を 撃ち出す。 炎で 木の実を 焼いて 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "ころがる" },
			damage: 30,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861267,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861566,
			},
		},
		{
			type: "reverse",
			foil: "friendball",
			thirdParty: {
				cardmarket: 861567,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [498],
};

export default card;
