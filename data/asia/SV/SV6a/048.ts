import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャース",
		'zh-tw': "喵喵",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "眩しく 光るものが 大好き。 光るものを 見つけたとき なぜか 額の小判も 輝く。",
		'zh-tw': "非常喜歡耀眼的發光物。 找到發光物時，不知為何 額頭的金幣也會跟著發光。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みだれひっかき",
				'zh-tw': "亂抓",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×20ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773797,
				tcgplayer: 566299,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [52],
};

export default card;
