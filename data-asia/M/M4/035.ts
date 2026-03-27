import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メガフラエッテex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やさしいひかり" },
			cost: ["Psychic"],
			effect: {
				ja: "おたがいのポケモン全員のダメージを「30」ずつ回復する。",
			},
		},
		{
			name: { ja: "エタニティブルーム" },
			damage: 200,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "自分の山札から基本サイコエネルギーを4枚まで選び、自分のベンチポケモンに好きなようにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [670],

	suffix: "EX",
};

export default card;
