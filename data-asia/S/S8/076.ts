import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメラ",
		'zh-tw': "黏黏寶",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Dragon"],

	description: {
		ja: "ツノは 優れた 感覚器官。 敵の 気配を 感じ取り すぐに 隠れる ことで 生き残ってきた。",
		'zh-tw': "牠的觸角是優秀的感覺器官。只要感覺到有敵人就會立刻躲起來，以此存活到了現在。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "とかす",
				'zh-tw': "溶解",
			},
			damage: 20,
			cost: ["Water", "Psychic"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575631,
				tcgplayer: 569577,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [704],
};

export default card;
