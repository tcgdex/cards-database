import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ロストシティ",
		'zh-tw': "放逐市",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいのポケモンがきぜつするたび、そのポケモンはトラッシュせずに、ロストゾーンに置く。（ポケモン以外のカードは、すべてトラッシュする。）",
		'zh-tw': "每次當雙方的寶可夢【氣絕】時，不丟棄那隻寶可夢，而是放置於放逐區。（寶可夢以外的卡全部丟棄。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667974,
				tcgplayer: 570030,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
