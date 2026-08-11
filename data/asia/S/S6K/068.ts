import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "いにしえの墓地",
		'zh-tw': "遠古墓地",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分の手札からエネルギーをポケモン（[超]ポケモンをのぞく）につけるたび、そのポケモンにダメカンを2個のせる。",
		'zh-tw': "雙方玩家每次從自己的手牌將能量附於寶可夢（【超】寶可夢除外）身上時，在那隻寶可夢身上放置2個傷害指示物。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560856,
				tcgplayer: 569296,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
