import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "メリッサ",
		'zh-tw': "梅麗莎",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のロストゾーンにカードが10枚以上あるときにしか使えない。次の相手の番、自分のポケモン全員が、相手の「ポケモンV」から受けるワザのダメージは「-120」される。（新しく場に出したポケモンもふくむ。）",
		'zh-tw': "這張卡只有在自己的放逐區有10張以上的卡時才可使用。在下個對手的回合，自己的所有寶可夢受到對手的「寶可夢【V】」招式的傷害「-120」點。（包含新上場的寶可夢。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667973,
				tcgplayer: 570029,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
