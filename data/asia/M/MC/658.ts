import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "プレシャスキャリー",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "自分の山札からたねポケモンを好きなだけ選び、ベンチに出す。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863960,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
