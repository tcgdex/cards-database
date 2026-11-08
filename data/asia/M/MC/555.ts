import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のコラッタ",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "ありふれた ポケモンだが 注意。 鋭い 前歯は 堅い 材木さえ 簡単に へしおる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あぶないまえば" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863857,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [19],
};

export default card;
