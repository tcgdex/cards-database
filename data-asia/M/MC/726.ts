import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マチスの取引",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "「おたがいのプレイヤーは、それぞれサイドを1枚とる。」をのぞむか、相手にたずねる。相手がのぞむなら、おたがいのプレイヤーは、それぞれサイドを1枚とる。のぞまないなら、自分は山札を4枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864028,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
