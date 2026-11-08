import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナックラー",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "アゴは 岩も 砕くが 重くて ひっくり 返ると 起きられない。 メグロコは その隙を 狙うのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あなをほる" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554873,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [328],
};

export default card;
