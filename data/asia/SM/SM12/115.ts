import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タッグコール",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある「TAG TEAM」のカードを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555106,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
