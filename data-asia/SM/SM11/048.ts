import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ジーランス",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "絶滅したと 考えられていた。 ジーランスの 名は 発見者の 名前を もじって つけられた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しんかいボーリング" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるトレーナーズを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "みずのはどう" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557010,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [369],
};

export default card;
