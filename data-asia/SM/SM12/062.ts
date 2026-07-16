import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ペロッパフ",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "わたあめのような 甘くて ベタつく 白い 糸を 出して 相手を 絡め取り 動きを 封じる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "コットンガード" },
			damage: 10,
			cost: ["Fairy"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554929,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [684],
};

export default card;
