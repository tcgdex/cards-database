import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ラルトス",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "赤いツノで 人や ポケモンの 温かな 気持ちを キャッチすると 全身が ほのかに 熱くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ドレインキッス" },
			damage: 10,
			cost: ["Fairy"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561036,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [280],
};

export default card;
