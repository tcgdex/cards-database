import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "スケーターズパーク",
		'zh-tw': "滑板選手的公園",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいのバトルポケモンがにげるとき、トラッシュするエネルギーが基本エネルギーなら、そのエネルギーはトラッシュせず、自分の手札にもどす。",
		'zh-tw': "雙方的戰鬥寶可夢【撤退】時，若丟棄的能量為基本能量，則不丟棄那些能量，而是放回自己的手牌。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575654,
				tcgplayer: 569600,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
