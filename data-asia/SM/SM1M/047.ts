import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いかり" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
		{
			name: { ja: "つのでつく" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "マッドブルGX" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x30ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561648,
			},
		},
	],

	retreat: 3,
	rarity: "Double rare",
	dexId: [128],

	suffix: "GX",
};

export default card;
