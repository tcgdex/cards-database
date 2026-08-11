import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "モンジャラ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "たくさんの うごめく ツルに 覆われて 正体不明。 青いツルは 一生 伸びる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しばりつける" },
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561004,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [114],
};

export default card;
