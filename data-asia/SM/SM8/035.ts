import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "体毛に ためた 電気が 満タンになると 尻尾が 光る。 触れると しびれる 毛を 飛ばす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "シグナルビーム" },
			damage: 40,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558674,
			},
		},
	],

	evolveFrom: {
		ja: "メリープ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [180],
};

export default card;
