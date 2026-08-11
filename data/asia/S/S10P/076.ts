import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータンV",
	},

	illustrator: "Toyste Beach",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おとりよせ" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札から「ポケモンのどうぐ」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコキネシス" },
			damage: "30+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651339,
				tcgplayer: 569919,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [765],
};

export default card;
