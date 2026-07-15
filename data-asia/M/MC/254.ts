import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バチュル",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		ja: "自分では 電気を つくれないので ほかの 大きな ポケモンに とりつき 静電気を 吸いとる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バチュチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[G]エネルギー」と「基本[L]エネルギー」をそれぞれ2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863550,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [595],
};

export default card;
