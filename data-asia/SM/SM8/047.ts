import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ベベノム",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "異世界に おいては 旅立ちの パートナーに 選ばれるほど 親しまれている ウルトラビースト。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アイオープナー" },
			cost: ["Colorless"],
			effect: {
				ja: "ウラになっている自分のサイドのオモテをすべて見てから、もとにもどす。",
			},
		},
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558686,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [803],
};

export default card;
