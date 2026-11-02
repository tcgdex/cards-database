import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオンV",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ヒートブラスト" },
			damage: 50,
			cost: ["Fire", "Colorless"],
		},
		{
			name: { ja: "ダイナマイトタックル" },
			damage: "100+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンが10個以上のっているなら、150ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560948,
				tcgplayer: 569203,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [721],
};

export default card;
