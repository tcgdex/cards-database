import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブライア",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、相手のサイドの残り枚数が2枚のときにしか使えない。この番、自分の「テラスタル」のポケモンが使うワザのダメージで、相手のバトルポケモンがきぜつしたなら、サイドを1枚多くとる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864024,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
