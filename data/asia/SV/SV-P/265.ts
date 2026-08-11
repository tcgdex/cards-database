import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のガルーラex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくパンチ" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを4回投げ、オモテの数×30ダメージ。",
			},
		},
		{
			name: { ja: "バッドインパクト" },
			damage: "120+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "この番に、手札から、名前に「ロケット団」とつくサポートを出して使っていたなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821710,
				tcgplayer: 688209,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [115],

	suffix: "EX",
};

export default card;
