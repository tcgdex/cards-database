import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "あなぬけのヒモ",
		'zh-tw': "離洞繩",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分のバトルポケモンをベンチポケモンと入れ替える。（入れ替えは相手からおこない、ベンチがいないプレイヤーは、入れ替えをしない。）",
		'zh-tw': "雙方玩家將自己的戰鬥寶可夢與備戰寶可夢互換。（由對手先進行互換。沒有備戰寶可夢的玩家不用進行互換。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586646,
				tcgplayer: 571383,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578411,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "None",
};

export default card;
