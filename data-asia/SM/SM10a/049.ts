import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "コーチトレーナー",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。自分のバトルポケモンが「TAG TEAM」なら、さらに2枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557328,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
