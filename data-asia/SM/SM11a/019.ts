import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルコ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "口を 開いたまま 泳いで 海水ごと エサを 食う。 いらない 水は 鼻から 噴き出し 捨てる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スプラッシュ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556604,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [320],
};

export default card;
