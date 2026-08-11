import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エレブー",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'ja-jp': "餌で 喰う 電気量 よりも 身体から 漏れる 電気量の ほうが 圧倒的に 多い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんきショック" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558914,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [125],
};

export default card;
