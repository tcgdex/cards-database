import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "グラードン",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "高熱で 水を 蒸発させて 大地を 広げたと 言われている。 カイオーガと 激しく 戦った。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひでり" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札にある[闘]エネルギーを2枚まで、自分のポケモン1匹につける。",
			},
		},
		{
			name: { ja: "ふるえるだいち" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「ふるえるだいち」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556649,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [383],
};

export default card;
