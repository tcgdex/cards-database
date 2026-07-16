import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "コリンク",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "危険を 感じると 全身の 体毛が 光る。 相手が 目を くらませている あいだに 逃げる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じゅうでん" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[雷]エネルギーを1枚、このポケモンにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559831,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [403],
};

export default card;
