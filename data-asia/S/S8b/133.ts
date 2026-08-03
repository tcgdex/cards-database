import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "回収ネット",
		'zh-tw': "回收網",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分のポケモン（「ポケモンV・GX」をのぞく）を1匹選び、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）",
		'zh-tw': "選擇自己的1隻寶可夢（「寶可夢【V】・【GX】」除外），放回手牌。（寶可夢以外的卡全部丟棄。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586649,
				tcgplayer: 571386,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578414,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "D",
	rarity: "None",
};

export default card;
