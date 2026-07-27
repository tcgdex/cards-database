import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラニャース",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "気まぐれで わがままで 飽きっぽい。 尽くされるより 尽くすのが 好きな 一部の トレーナーに 大人気。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いばる" },
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ひっかける" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556672,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [52],
};

export default card;
