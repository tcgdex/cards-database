import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハラバリー",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'ja-jp': "目玉に 見えるが じつは お腹の へそダイナモで 作った 電気を 撃ちだす 放電器官なのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "でんきショック" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ライトニングボール" },
			damage: 130,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863568,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ズピカ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [939],
};

export default card;
