import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のおじゃまロボ",
		'zh-tw': "火箭隊的妨礙機器人",
		'zh-cn': "火箭隊的妨礙機器人",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "ウラになっている相手のサイド1枚と、相手の手札からオモテを見ないで1枚選び、それぞれオモテを見る。のぞむなら、選んだカードを相手に入れ替えさせる。（対戦が終わるまで、そのサイドはオモテのまま。）",
		'zh-tw': "選擇1張對手的反面朝上的獎賞卡，並在不看正面的情況下，從對手的手牌選擇1張，查看各自的正面。若希望，令對手互換所選的卡。（在對戰結束前，那張獎賞卡維持正面朝上。）",
		'zh-cn': "選擇1張對手的反面朝上的獎賞卡，並在不看正面的情況下，從對手的手牌選擇1張，查看各自的正面。若希望，令對手互換所選的卡。（在對戰結束前，那張獎賞卡維持正面朝上。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821919,
				tcgplayer: 628728,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
