import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "なぞの化石",
		'zh-tw': "謎之化石",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP60の[無]タイプのたねポケモンとして、場に出すことができる。自分の番の中でなら、場に出ているこのカードをトラッシュしてよい。このカードは、にげられない。",
		'zh-tw': "這張卡可作為HP60的【無】屬性的【基礎】寶可夢放置於場上。若在自己的回合中，則可將場上的這張卡丟棄。這張卡無法撤退。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651120,
				tcgplayer: 569904,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Common",
};

export default card;
