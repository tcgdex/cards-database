import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラベトベター",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "アローラの ゴミ処分場 には １００匹前後が 棲んでいる。 みな たくさん ゴミを 食う 働きもの。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とかす" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ベトベト" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556680,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [88],
};

export default card;
