import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼイユ",
		'zh-tw': "丹瑜",
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		ja: "このカードは、先攻プレイヤーの最初の番でも使える。自分の手札をすべてトラッシュし、山札を5枚引く。",
		'zh-tw': "這張卡可在先攻玩家的最初回合使用。 將自己的手牌全部丟棄，從牌庫抽出5張卡。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767557,
				tcgplayer: 568113,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Ultra Rare",
};

export default card;
