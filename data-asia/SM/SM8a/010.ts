import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "バチュル",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		ja: "体の 大きな ポケモンに とりついて 静電気を 吸い取り 蓄電袋に 電気を ためる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きゅうけつ" },
			damage: 10,
			cost: ["Lightning"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558584,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [595],
};

export default card;
