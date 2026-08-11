import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤップ",
		'zh-tw': "冷水猴",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "頭の ふさに ためた 水は 栄養 たっぷり。 植物に かけると 大きく 育つのだ。",
		'zh-tw': "頭上的毛髮叢裡儲藏的水充滿營養。如果拿來灌溉，植物就會茁壯成長。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぐいっとする",
				'zh-tw': "猛地一動",
			},
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "相手の手札を見る。",
				'zh-tw': "查看對手的手牌。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571587,
				tcgplayer: 569328,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [515],
};

export default card;
