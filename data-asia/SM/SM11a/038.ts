import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナゲツケサル",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "唾液を 使って 葉っぱを 肩に 貼り付けて マーキング。 葉っぱの 配置で どの 群れか わかるよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スパイクドロー" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "ちきゅうなげ" },
			damage: 70,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556670,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [766],
};

export default card;
