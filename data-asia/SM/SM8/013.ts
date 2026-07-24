import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ツボツボGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "まもりのツボ" },
			effect: {
				ja: "このポケモンは、ついているエネルギーが2個以下の相手のポケモンから、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "さんばいどく" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は3個になる。",
			},
		},
		{
			name: { ja: "まきつくGX" },
			damage: 40,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをマヒにする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558652,
			},
		},
	],

	retreat: 1,
	rarity: "Double rare",
	dexId: [213],

	suffix: "GX",
};

export default card;
