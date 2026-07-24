import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ナエトル",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "全身で 光合成を して 酸素を 作る。 のどが 渇くと 頭の 葉っぱが しおれてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "はっぱカッター" },
			damage: 50,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559960,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [387],
};

export default card;
