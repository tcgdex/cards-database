import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "体毛に ためた 電気が 満タンになると 尻尾が 光る。 触れると しびれる 毛を 飛ばす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ビリリパンチ" },
			damage: 30,
			cost: ["Lightning"],
		},
		{
			name: { ja: "ショックボルト" },
			damage: 60,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "このポケモンについている[雷]エネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558579,
			},
		},
	],

	evolveFrom: {
		ja: "メリープ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [180],
};

export default card;
