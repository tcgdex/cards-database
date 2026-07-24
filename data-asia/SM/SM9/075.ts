import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロス",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "集団で 生活する。 群れの 中で １番 太く 長く キズだらけの ツノを持つのが ボス。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いかりのむれ" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場の「ケンタロス（GXをふくむ）」にのっているダメカンの数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558433,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [128],
};

export default card;
