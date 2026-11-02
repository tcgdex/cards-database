import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマッグ",
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "火山が 活発だった 太古の 世界では 今よりも たくさんの マグマッグが 暮らしていたという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あついマグマ" },
			damage: 20,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
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
