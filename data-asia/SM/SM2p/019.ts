import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "エレブー",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "突然起こる 停電の 半分は エレブーが 発電所に 集まり 電気を 喰い散らかした からだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パンチ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "でんきショック" },
			damage: 40,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561222,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [125],
};

export default card;
