import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "シンオウの仲間たち",
		'zh-tw': "神奧的夥伴",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。",
		'zh-tw': "從自己的牌庫抽出3張卡。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687809,
				tcgplayer: 571785,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
