import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イシズマイ",
	},

	illustrator: "Kanami Ogata",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "家に ちょうどいい 小石が 見つからないと カバルドンの 穴に 棲んでしまうことも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かくせい" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861257,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861548,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861549,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [557],
};

export default card;
