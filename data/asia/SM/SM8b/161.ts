import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ストライク",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "若いうちは 山奥で 群れて 暮らし 鎌での 戦いかたや 高速移動を 修行する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶんしん" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある「ストライク」を2枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "こうそくいどう" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551301,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [123],
};

export default card;
