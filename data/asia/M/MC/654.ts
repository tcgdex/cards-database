import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ファイトゴング",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から[F]タイプのたねポケモンまたは「基本[F]エネルギー」を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863956,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
