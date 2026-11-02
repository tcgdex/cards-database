import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナ&カトレア",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュにあるサポート（「シロナ&カトレア」とこのカードの効果でトラッシュされたカードをのぞく）を1枚、相手に見せてから、手札に加える。追加で、このカードを使うときに、自分の手札を1枚トラッシュしてよい。その場合、自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555011,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
