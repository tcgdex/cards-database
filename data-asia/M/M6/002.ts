import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "アメタマ",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "頭の 先から 水飴に 似た 甘い 匂いの 液体を 出す。 水草の 多い 池に 棲む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふえる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「アメタマ」を2枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "むしくい" },
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899791,
				tcgplayer: 709158,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [283],
};

export default card;
