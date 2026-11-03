import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "アシマリ",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "鼻で ふくらませる バルーンは 日々 練習を 重ねることで 少しずつ 大きく なっていく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888255,
				cardtrader: 391407,
				tcgplayer: 695067,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [728],
};

export default card;
