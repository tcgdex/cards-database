import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "精神を 集中して 放つ 波動と 呼ばれる 不思議な 波は 大岩をも 粉々に 砕く。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "タッグコーチ" },
			effect: {
				ja: "このポケモンがいるかぎり、自分のTAG TEAMのポケモン全員が、相手のポケモンから受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マッハストレート" },
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557305,
			},
		},
	],

	evolveFrom: {
		ja: "リオル",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [448],
};

export default card;
