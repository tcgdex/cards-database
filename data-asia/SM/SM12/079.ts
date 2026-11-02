import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ワシボン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "強い 脚力と 丈夫な ツメで 硬い シェルダーの カラも 砕いて 中身を ついばむ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれづき" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554986,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [627],
};

export default card;
