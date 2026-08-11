import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ひかるセレビィ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "時間を超えて あちこち さまよう。 セレビィが 姿を 現した 森は 草木が 生い茂るという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "タイムリコール" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の進化しているポケモン全員は、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "リーフステップ" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560162,
			},
		},
	],

	retreat: 1,
	rarity: "Shiny Ultra Rare",
	dexId: [251],
};

export default card;
