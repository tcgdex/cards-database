import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダブラン",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "２つの 脳みその 意見が 一致したときの 念力は 周囲１キロに およぶと いう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "セルスピア" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹に、ダメカンを2個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 678813,
				tcgplayer: 597485,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ユニラン",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [578],
};

export default card;
