import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はなのカーテン" },
			effect: {
				ja: "このポケモンがいるかぎり、自分のベンチポケモン（「ルールを持つポケモン」をのぞく）全員は、相手のワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "けとばす" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 843813,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [492],
};

export default card;
