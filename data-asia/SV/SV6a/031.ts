import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア",
		'zh-tw': "索羅亞",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "人や ほかの ポケモンに 化ける。 自分の 正体を 隠すことで 危険から 身を 守っているのだ。",
		'zh-tw': "會化為人類或其他的寶可夢。 透過隱藏自己原本的面貌， 保護自己不遇危險。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふむ",
				'zh-tw': "踩",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ダブルひっかき",
				'zh-tw': "雙重抓",
			},
			damage: "20×",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773780,
				tcgplayer: 566282,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [570],
};

export default card;
