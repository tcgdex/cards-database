import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "ぼうけんのカバン",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある「ポケモンのどうぐ」を2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558887,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
