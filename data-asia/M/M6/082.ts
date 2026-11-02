import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "バチンウニ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エナジークラッシュ" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員についているエネルギーの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900108,
				tcgplayer: 709235,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [871],
};

export default card;
