import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はどうげき" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "この番、このポケモンが「リオル」から進化していたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "せんぷうきゃく" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
		{
			name: { ja: "クロスビートGX" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x30ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559780,
			},
		},
	],

	evolveFrom: {
		ja: "リオル",
	},

	retreat: 2,
	rarity: "Double rare",
	dexId: [448],

	suffix: "GX",
};

export default card;
