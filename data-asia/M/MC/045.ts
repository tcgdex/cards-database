import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イシズマイ",
	},

	illustrator: "Kanami Ogata",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "家に ちょうどいい 小石が 見つからないと カバルドンの 穴に 棲んでしまうことも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かくせい" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863336,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [557],
};

export default card;
