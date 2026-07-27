import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "エモンガ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "電撃で 木の実や むしポケモンを こんがり 焼いて 喰う。 ツツケラが 空けた 木の穴が 主な 巣だ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ほっぺのつどい" },
			effect: {
				ja: "自分の番に1回使える。自分の山札にあるワザ「ほっぺすりすり」を持つポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほっぺすりすり" },
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558583,
			},
		},
	],

	retreat: 0,
	rarity: "Common",
	dexId: [587],
};

export default card;
