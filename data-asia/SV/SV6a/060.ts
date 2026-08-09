import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アンズの秘技",
		'zh-tw': "阿杏的秘招",
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		ja: "自分の[D]ポケモンを2匹まで選び、自分の山札から「基本[D]エネルギー」を1枚ずつつける。そして山札を切る。バトルポケモンにつけた場合、そのポケモンをどくにする。",
		'zh-tw': "選擇最多2隻自己的【惡】寶可夢，從自己的牌庫附給那些寶可夢各1張「基本【惡】能量」卡。並且重洗牌庫。附於戰鬥寶可夢身上的情況下，將那隻寶可夢【中毒】。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773809,
				tcgplayer: 566311,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
