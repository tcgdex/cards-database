import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "チュリネ",
		'zh-tw': "百合根娃娃",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "頭の 葉は 薬として 重宝されたり。 天日で 乾かし 煎じて 飲むと 苦けれども 疲労回復に 効果抜群。",
		'zh-tw': "頭上的葉片是人們愛用的藥材。在太陽下曬乾後煎煮服用，雖然味苦但能有效地消除疲勞。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "はねまわる",
				'zh-tw': "活蹦亂跳",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673004,
				tcgplayer: 570770,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570862,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [548],
};

export default card;
