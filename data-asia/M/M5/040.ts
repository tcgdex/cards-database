import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "マンキー",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		ja: "普段は 機嫌が 良くても ちょっとしたことで いきなり 暴れだすから 怖いのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けたぐり" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888285,
				cardtrader: 391430,
				tcgplayer: 695083,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [56],
};

export default card;
