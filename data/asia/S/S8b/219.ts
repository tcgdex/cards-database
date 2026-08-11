import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデVMAX",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "キョダイヒャッカ" },
			damage: "40+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーの数×40ダメージ追加。のぞむなら、ダメージを与えたあとに、自分のトラッシュから[炎]エネルギーを1枚選び、このポケモンにつける。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587017,
				tcgplayer: 571471,
			},
		},
	],

	evolveFrom: {
		ja: "マルヤクデV",
	},

	retreat: 3,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [851],
};

export default card;
