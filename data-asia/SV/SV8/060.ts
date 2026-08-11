import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "マンキー",
		'zh-tw': "猴怪",
		'zh-cn': "猴怪",
	},

	illustrator: "Apios",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "普段は 機嫌が 良くても ちょっとしたことで いきなり 暴れだすから 怖いのだ。",
		'zh-tw': "平時就算心情再怎麼好， 也會因為一點芝麻小事 而突然暴怒，令人害怕。",
		'zh-cn': "平時就算心情再怎麼好， 也會因為一點芝麻小事 而突然暴怒，令人害怕。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ダブルチョップ",
				'zh-tw': "二連劈",
				'zh-cn': "二連劈",
			},
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×10ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
				'zh-cn': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793494,
				tcgplayer: 587640,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [56],
};

export default card;
