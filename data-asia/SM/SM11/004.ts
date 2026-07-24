import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "キノココ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "湿った 場所を 好み 昼間は 森の 木陰で じっと している。 頭から 毒の 粉を 出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくのこな" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556963,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [285],
};

export default card;
