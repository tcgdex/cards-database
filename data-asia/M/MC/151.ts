import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウガツホムラex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ヒートブラスト" },
			damage: 60,
			cost: ["Fire", "Colorless"],
		},
		{
			name: { ja: "れっかばくしん" },
			damage: 260,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このワザを使ったなら、このポケモンは、バトル場をはなれるまで「れっかばくしん」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863447,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1020],

	suffix: "EX",
};

export default card;
