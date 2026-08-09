import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "結晶の洞窟",
		'zh-tw': "結晶洞窟",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の[鋼]ポケモンと[竜]ポケモン全員のHPを、それぞれ「30」回復してよい。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可將自己的所有【鋼】寶可夢與【龍】寶可夢各恢復「30」HP。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571657,
				tcgplayer: 569389,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
