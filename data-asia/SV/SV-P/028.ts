import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロロン",
		'zh-tw': "密勒頓",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "スクラップ工場に 放置された エンジンに 謎の 毒ポケモンが 入り込んで 生まれたと 言われる。",
		'zh-tw': "詳情目前仍然不明。雖然給人 貌似摩托蜥的印象，但力量和 冷酷的程度可說是天壤之別。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どくガス",
				'zh-tw': "銳利之牙",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693189,
				tcgplayer: 587785,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [965],
};

export default card;
