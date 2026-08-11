import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "霧の水晶",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分の山札から[超]タイプのたねポケモンまたは[超]エネルギーを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560993,
				tcgplayer: 569321,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Secret Rare",
};

export default card;
