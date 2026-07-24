import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "キングラー",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "硬い ハサミは １万馬力の パワーを 持っているが 大きすぎて 動きが 鈍い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バブルこうせん" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "だいせつだん" },
			damage: 130,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557382,
			},
		},
	],

	evolveFrom: {
		ja: "クラブ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [99],
};

export default card;
