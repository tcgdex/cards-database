import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クロバットV",
		'zh-tw': "彷徨夜靈",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ナイトアセット" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札が6枚になるように、山札を引く。この番、すでに別の「ナイトアセット」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "どくのキバ",
				'zh-tw': "漆黑",
			},
			damage: 70,
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525440,
				tcgplayer: 597351,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [169],
};

export default card;
