import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "マンタイン",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "泳いで スピードが のってくると 波の上に 飛びだし そのまま １００メートルも 滑空 する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずため" },
			cost: ["Water"],
			effect: {
				ja: "自分の山札から[水]エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 60,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463014,
				tcgplayer: 597243,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [226],
};

export default card;
