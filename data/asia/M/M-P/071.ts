import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メガヤドランex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "シェルネードスピン" },
			damage: 180,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを12個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 871028,
			},
		},
	],

	evolveFrom: {
		ja: "ヤドン",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Promo",
	dexId: [80],

	suffix: "EX",
};

export default card;
