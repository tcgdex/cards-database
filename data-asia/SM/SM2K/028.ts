import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ワンリキー",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "きたえるのが 大好き。 日に日に 膨れていく 筋肉を ながめて ますます トレーニングに 励むぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ダブルチョップ" },
			damage: "30×",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "コインを2回投げ、オモテの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561494,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [66],
};

export default card;
