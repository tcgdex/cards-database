import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "まどろみの森",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーがねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557050,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
