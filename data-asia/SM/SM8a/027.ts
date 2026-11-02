import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "バルチャイ",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "まだまだ 遊び盛り。 羽が 未熟で 飛べないので ぴょんぴょん 跳ね回っているよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "どつく" },
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558601,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [629],
};

export default card;
