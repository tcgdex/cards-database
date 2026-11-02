import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "チャーレム",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "ダンスのような 優雅な 動きで 攻撃を かわして 強烈な 一撃を 相手に お見舞いする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ローキック" },
			damage: 40,
			cost: ["Fighting"],
		},
		{
			name: { ja: "とびひざげり" },
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863671,
			},
		},
	],

	evolveFrom: {
		ja: "アサナン",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [308],
};

export default card;
