import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ダブラン",
	},

	illustrator: "mele",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "２つの 脳みその 意見が 一致したときの 念力は 周囲１キロに およぶと いう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダブルトリック" },
			damage: "30×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752796,
				tcgplayer: 568365,
			},
		},
	],

	evolveFrom: {
		ja: "ユニラン",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [578],
};

export default card;
