import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポカブ",
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "敵の 攻撃を 身軽に 避けて 鼻から 火の玉を 撃ち出す。 炎で 木の実を 焼いて 食べる。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "たいあたり" }, damage: 10, cost: ["Fire"] },
		{ name: { ja: "ころがる" }, damage: 30, cost: ["Fire", "Fire"] },
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],
	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [498],
	thirdParty: {
		cardmarket: 829451,
		tcgplayer: 636649,
	},
};

export default card;
