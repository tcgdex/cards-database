import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "エネコ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "自分の 尻尾を 追いかけて 遊んでいると 目を 回すといった 可愛らしい 一面を みせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねこだまし" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559036,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [300],
};

export default card;
