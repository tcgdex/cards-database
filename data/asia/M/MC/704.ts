import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "からておうの稽古",
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		ja: "この番、自分のポケモンが使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+40」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864006,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
