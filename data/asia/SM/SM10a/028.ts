import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジガルデ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "ジガルデの 一部が １割ほど 集まった。 相手の 懐に 飛びかかり 鋭いキバで 噛みつく。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "セルカンパニー" },
			effect: {
				ja: "このポケモンがベンチにいるかぎり、自分の「ジガルデ（GXをふくむ）」が使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブーストファング" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "自分のトラッシュにある[闘]エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557307,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [718],
};

export default card;
