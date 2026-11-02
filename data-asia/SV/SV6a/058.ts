import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "力の砂時計",
		'zh-tw': "力之沙漏",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の番の終わりに、このカードをつけているポケモンがバトル場にいるなら、自分のトラッシュから基本エネルギーを1枚選び、そのポケモンにつけてよい。",
		'zh-tw': "在自己的回合結束時，若附有這張卡的寶可夢在戰鬥場上，則可從自己的棄牌區選擇1張基本能量卡，附於那隻寶可夢身上。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773807,
				tcgplayer: 566309,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
