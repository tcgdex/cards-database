import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "クセロシキのたくらみ",
		'zh-tw': "庫瑟洛斯奇的企圖",
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		ja: "相手は相手自身の手札を、3枚になるようにトラッシュする。",
		'zh-tw': "對手將對手自己的手牌丟棄直到變為3張為止。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773811,
				tcgplayer: 566313,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
