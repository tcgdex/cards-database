import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マスター",
		'zh-tw': "老闆",
	},

	illustrator: "Hasegawa Saki",
	category: "Trainer",

	effect: {
		ja: "このカードを使ったら、自分の番は終わる。自分のベンチポケモンを3匹まで選び、山札から、それぞれちがうタイプの基本エネルギーを1枚ずつつける。そして山札を切る。",
		'zh-tw': "若使用了這張卡，則自己的回合結束。選擇最多3隻自己的備戰寶可夢，從牌庫附給那些寶可夢各1張各不同屬性的基本能量卡。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586675,
				tcgplayer: 571411,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578437,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "None",
};

export default card;
