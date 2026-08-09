import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "人や ほかの ポケモンに 化ける。 自分の 正体を 隠すことで 危険から 身を 守っているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ダブルひっかき" },
			damage: "20×",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773821,
				tcgplayer: 566323,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [570],
};

export default card;
