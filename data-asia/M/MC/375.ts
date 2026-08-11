import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "グラードン",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "高熱で 水を 蒸発させて 大地を 広げたと 言われている。 カイオーガと 激しく 戦った。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 80,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
		{
			name: { ja: "メガトンフォール" },
			damage: 150,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863677,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [383],
};

export default card;
