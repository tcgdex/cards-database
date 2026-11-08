import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒスイの仲間たち",
		'zh-tw': "洗翠的夥伴",
	},

	illustrator: "Kinu Nishimura",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
		'zh-tw': "從自己的牌庫抽出3張卡。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687811,
				tcgplayer: 571787,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
