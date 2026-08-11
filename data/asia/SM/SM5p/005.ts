import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒコザル",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "お腹で 作られた ガスが お尻で 燃えている。 体調が 悪いと 炎が 弱くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを3回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559755,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [390],
};

export default card;
