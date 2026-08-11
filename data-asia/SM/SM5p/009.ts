import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッタイシ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "仲間を 作らずに 暮らす。 翼の 強烈な 一撃は 大木を 真っ二つに へし折る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バブルこうせん" },
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 40,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559759,
			},
		},
	],

	evolveFrom: {
		ja: "ポッチャマ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [394],
};

export default card;
