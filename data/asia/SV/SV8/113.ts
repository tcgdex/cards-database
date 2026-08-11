import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マッギョ",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'ja-jp': "干潟が すみか。 泥に 棲む 細菌に よって 電気を つくる 器官が 発達した。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バチッとしびれる" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。さらに、そのポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793577,
				tcgplayer: 587724,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [618],
};

export default card;
