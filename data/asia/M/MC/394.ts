import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マッギョex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじりつく" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "びちびちトラップ" },
			damage: "100+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンがのっているなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863696,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [618],

	suffix: "EX",
};

export default card;
