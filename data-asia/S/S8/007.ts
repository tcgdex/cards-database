import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "チョボマキ",
		'zh-tw': "小嘴蝸",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "電気 エネルギーに 反応する 不思議な 体質。 カブルモと ともに いると なぜか 進化する。",
		'zh-tw': "有著會對電能產生反應的奇異體質。不知為何，和蓋蓋蟲待在一起就會進化。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "スピットビーム",
				'zh-tw': "噴吐光束",
			},
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575557,
				tcgplayer: 569508,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [616],
};

export default card;
