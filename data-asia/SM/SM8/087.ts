import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "アカネ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札を1枚引く。自分のトラッシュに「アカネ」（このカードをのぞく）があるなら、その枚数x2枚ぶん、さらに山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558726,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
