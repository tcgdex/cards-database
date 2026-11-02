import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "シトロンの機転",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分の[L]ポケモン全員のHPを、それぞれ「60」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864012,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
