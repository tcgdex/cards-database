import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ばつぐんグラス",
		'zh-tw': "超群眼鏡",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザのダメージで、相手のバトルポケモンの弱点を計算するとき、弱点は「×3」としてダメージ計算をする。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651122,
				tcgplayer: 569906,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
