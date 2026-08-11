import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハイダイ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "自分の手札を2枚選び、好きな順番に入れ替えて、山札の下にもどす。その後、山札を4枚引く。（自分の手札を2枚もどせないなら、このカードは使えない。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864022,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
