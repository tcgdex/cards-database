import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "エアームド",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "鉄の 身体は 頑丈だが さびやすいので 雨の 日は 巣穴で じっと しているよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "カームストライク" },
			damage: "20+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "自分がすでにGXワザを使っていたなら、70ダメージ追加。",
			},
		},
		{
			name: { ja: "はがねのつばさ" },
			damage: 90,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558607,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [227],
};

export default card;
