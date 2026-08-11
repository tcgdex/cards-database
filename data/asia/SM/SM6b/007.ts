import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "サボネア",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "砂漠などの 過酷な 環境を 好む。 体の 中に たくわえた 水で ３０日間 生きられる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "トゲトゲどく" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "なぐる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559157,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [331],
};

export default card;
