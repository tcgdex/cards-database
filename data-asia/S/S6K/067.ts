import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ズミ",
		'zh-tw': "志米",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の「れんげき」のポケモンを2匹まで選び、HPをそれぞれ「60」回復する。",
		'zh-tw': "選擇最多2隻自己的「連擊」寶可夢，各恢復「60」HP。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560855,
				tcgplayer: 569295,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
