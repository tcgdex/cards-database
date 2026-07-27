import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴースト",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "暗闇にまぎれ ガスの手を 伸ばし 人の肩を 叩くのが 好き。 触られると 震えが 止まらない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくのいき" },
			damage: 30,
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752827,
				tcgplayer: 568380,
			},
		},
	],

	evolveFrom: {
		ja: "ゴース",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [93],
};

export default card;
