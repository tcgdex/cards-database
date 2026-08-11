import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダンバル",
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'ja-jp': "磁力の 波長で 仲間と 交信。 群れになった ダンバルは 一糸乱れぬ 動きを する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 10,
			cost: ["Metal"],
		},
		{
			name: { ja: "ビーム" },
			damage: 20,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876956,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [374],
};

export default card;
