import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ウルトラスペース",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札にある「ウルトラビースト」を1枚、相手に見せてから、手札に加えてよい。その場合、山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551211,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "None",
};

export default card;
