import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュペッタ",
	},

	illustrator: "YASHIRO Nanaco",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "捨てられた ぬいぐるみに 怨念が 溜まって ポケモンになった。 薄暗い 路地裏で 見かける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "のろいのことば" },
			cost: ["Psychic"],
			effect: {
				ja: "相手は相手自身の手札を3枚選び、山札にもどして切る。",
			},
		},
		{
			name: { ja: "ホロウショット" },
			damage: 70,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864051,
			},
		},
	],

	evolveFrom: {
		ja: "カゲボウズ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [354],
};

export default card;
