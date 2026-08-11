import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマッグ",
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "火山が 活発だった 太古の 世界では 今よりも たくさんの マグマッグが 暮らしていたという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あついマグマ" },
			damage: 20,
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863389,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [218],
};

export default card;
