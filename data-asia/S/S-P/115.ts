import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴマゾウ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "体は 小さいが 力持ち。 大人の 人を 軽々と 背中に 乗せて 歩いてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "おかえしアタック" },
			damage: "30×",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525260,
				tcgplayer: 597316,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [231],
};

export default card;
