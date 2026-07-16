import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "アカネ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分の山札を1枚引く。自分のトラッシュに「アカネ」（このカードをのぞく）があるなら、その枚数x2枚ぶん、さらに山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558740,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
