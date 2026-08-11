import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラコ",
	},

	illustrator: "Yusuke Ohmura",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "人気の ない 山に 暮らす。 ジャラコ同士 戦いながら 少しずつ 成長 していく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうちょく" },
			cost: ["Lightning"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
		{
			name: { ja: "ドラゴンクロー" },
			damage: 20,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559330,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [782],
};

export default card;
