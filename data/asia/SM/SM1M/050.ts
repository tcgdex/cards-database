import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケララッパ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'ja-jp': "クチバシを 反り返らせ 色んな 音で 鳴く。 かなり うるさいので 周りの 御宅には 嫌われるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "タネマシンガン" },
			damage: "20×",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを4回投げ、オモテの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561651,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ツツケラ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [732],
};

export default card;
