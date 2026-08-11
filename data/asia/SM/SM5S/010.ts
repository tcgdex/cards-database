import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "チェリム",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "強い 日差しを 感じとると 閉ざしていた 花びらを 広げ 全身で 日光を 浴びる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おてんきガード" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の[草]ポケモン全員の弱点は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "タネばくだん" },
			damage: 30,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559964,
			},
		},
	],

	evolveFrom: {
		ja: "チェリンボ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [421],
};

export default card;
