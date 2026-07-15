import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オトスパス",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "全身が 筋肉の 塊。 触手を 使って 繰りだす 絞め技の 威力は 凄まじい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "チョップ" },
			damage: 40,
			cost: ["Fighting"],
		},
		{
			name: { ja: "テンタクルレイジ" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このワザは、このポケモンにダメカンがのっているなら、[F]エネルギー1個で使える。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863715,
			},
		},
	],

	evolveFrom: {
		ja: "タタッコ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [853],
};

export default card;
