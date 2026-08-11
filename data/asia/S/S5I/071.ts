import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アップリューV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すっぱいだえき" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーが、【無】エネルギー2個ぶん多くなる。",
			},
		},
		{
			name: { ja: "つばさでうつ" },
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538558,
				tcgplayer: 569020,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [841],
};

export default card;
