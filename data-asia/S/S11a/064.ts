import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "セレナ",
		'zh-tw': "莎莉娜",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "このカードは、2つの効果から1つを選んで使う。◆自分の手札を3枚まで選び、トラッシュする。（必ず1枚は選ぶ。）その後、自分の手札が5枚になるように、山札を引く。◆相手のベンチの「ポケモンV」を1匹選び、バトルポケモンと入れ替える。",
		'zh-tw': "這張卡從2種效果中選擇1種使用。 ◆選擇最多3張自己的手牌，將其丟棄。（一定要選擇1張。）然後，從牌庫抽卡直到自己的手牌滿5張為止。◆選擇對手的備戰區的1隻「寶可夢【V】」，與戰鬥寶可夢互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673062,
				tcgplayer: 570827,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570909,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
