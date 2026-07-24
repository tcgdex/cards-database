import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "エレブー",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "餌で 喰う 電気量 よりも 身体から 漏れる 電気量の ほうが 圧倒的に 多い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けたぐり" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
		{
			name: { ja: "かみなり" },
			damage: 90,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559828,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [125],
};

export default card;
