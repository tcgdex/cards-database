import { Card } from "models/database/card";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モンメン",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 50,
	types: ["Fairy"],

	description: {
		'ja-jp': "仲間を みつけると くっつく。 あまりに たくさん くっつきすぎて 入道雲 みたいになることも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくころがり" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561440,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [546],
};

export default card;
