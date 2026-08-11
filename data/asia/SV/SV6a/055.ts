import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケバイタルA",
		'zh-tw': "寶可生機劑A",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のポケモン1匹のHPを「150」回復する。このカードは、トラッシュにあるかぎり、手札に加えられず、山札にもどせない。",
		'zh-tw': "將自己的1隻寶可夢恢復「150」HP。 這張卡只要在棄牌區，無法加入手牌，無法放回牌庫。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773804,
				tcgplayer: 566306,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "ACE SPEC Rare",
};

export default card;
