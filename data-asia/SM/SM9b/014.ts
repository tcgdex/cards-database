import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "アーボ",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "顎を 外すことで 自分より 大きな 獲物も 丸呑みに する。 食後は 身体を 丸め 休む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "へびにらみ" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "しっぽでたたく" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558132,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [23],
};

export default card;
