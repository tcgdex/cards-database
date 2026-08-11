import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "モンスターボール",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863971,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "None",
};

export default card;
