import { Card } from "models/database/card";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "電磁レーダー",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札にある[雷]タイプの「ポケモンGX・EX」を2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558230,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
