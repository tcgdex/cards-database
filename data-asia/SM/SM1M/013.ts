import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "キャモメ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "キャモメが 飛び交う 海の 下は さかなポケモンが 群れているので 漁師は まずキャモメを 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねやすめ" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。次の自分の番、このポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561614,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [278],
};

export default card;
