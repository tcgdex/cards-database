import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ドリュウズ",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "鋼に 進化した ドリルは 鉄板を つらぬく 破壊力。 トンネル工事で 大活躍する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たがやす" },
			cost: ["Fighting"],
			effect: {
				ja: "自分のトラッシュにある好きなカードを4枚、相手に見せてから、山札にもどして切る。",
			},
		},
		{
			name: { ja: "きりさく" },
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557012,
			},
		},
	],

	evolveFrom: {
		ja: "モグリュー",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [530],
};

export default card;
