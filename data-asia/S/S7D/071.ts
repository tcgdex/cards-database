import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガンV",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いわおとし" },
			damage: 40,
			cost: ["Fighting"],
		},
		{
			name: { ja: "クラッシュファング" },
			damage: 200,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572053,
				tcgplayer: 569394,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [745],
};

export default card;
