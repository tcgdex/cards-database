import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "体毛に 溜めた 電気が 満タンになると 尻尾が 光る。 触れると しびれる 毛を 飛ばす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "でんじしょうがい" },
			damage: 40,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "次の相手の番、相手は手札からグッズを出して使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876927,
			},
		},
	],

	evolveFrom: {
		ja: "メリープ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [180],
};

export default card;
