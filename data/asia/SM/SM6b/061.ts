import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "地底探険隊",
	},

	illustrator: "Kagemaru Himeno",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を下から4枚見る。その中にある好きなカードを2枚、手札に加える。残りのカードは好きな順番に入れ替えて、山札の下にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559211,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
