import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ミラージュゲート",
		'zh-tw': "幻想門",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のロストゾーンにカードが7枚以上あるときにしか使えない。 自分の山札から、それぞれちがうタイプの基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
		'zh-tw': "這張卡只有在自己的放逐區有7張以上的卡時才可使用。從自己的牌庫選擇最多2張各不同屬性的基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667967,
				tcgplayer: 570023,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
