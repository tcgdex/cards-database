import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ウガツホムラex",
		ko: "꿰뚫는화염 ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ヒートブラスト",
				ko: "히트블라스트",
			},
			damage: 60,
			cost: ["Fire", "Colorless"],
		},
		{
			name: {
				ja: "れっかばくしん",
				ko: "열화맥진",
			},
			damage: 260,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このワザを使ったなら、このポケモンは、バトル場をはなれるまで「れっかばくしん」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752879,
				tcgplayer: 568432,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
	dexId: [1020],

	suffix: "EX",
};

export default card;
