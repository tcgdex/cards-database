import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモン通信",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の手札からポケモンを1枚選び、相手に見せてから、山札にもどす。もどした場合、自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555031,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Rare Holo",
};

export default card;
