import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "バチンウニ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "棘の 先から 電気を 放つ。 鋭い 歯で 岩に ついた 海藻を こそいで 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ダブルドロー" },
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "びりびりちくちく" },
			damage: 50,
			cost: ["Lightning", "Colorless", "Colorless"],
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
				cardmarket: 463144,
				tcgplayer: 597267,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [871],
};

export default card;
