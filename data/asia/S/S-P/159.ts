import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポカブ",
		'zh-tw': "葉伊布VSTAR",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "焼いた 木の実を 食べるのが 大好きだが 興奮しすぎて ときどき 真っ黒焦げに しちゃう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "葉子防守",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "かえん" },
			damage: 50,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597357,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [498],
};

export default card;
