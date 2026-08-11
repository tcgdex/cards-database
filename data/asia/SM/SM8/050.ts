import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴマゾウ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "体は 小さいが 力持ち。 大人の 人を 軽々と 背中に 乗せて 歩いてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とっておき" },
			damage: 50,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558689,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [231],
};

export default card;
