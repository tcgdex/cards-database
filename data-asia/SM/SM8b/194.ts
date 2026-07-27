import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ラルトス",
	},

	illustrator: "Kyoko Umemoto",
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
			type: "holo",
			thirdParty: {
				cardmarket: 551466,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [280],
};

export default card;
