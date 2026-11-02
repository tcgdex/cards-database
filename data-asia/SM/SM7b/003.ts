import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "キモリ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "足の 裏の 小さな トゲが 壁や 天井に 引っかかるので 逆さまに なっても 落ちないのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ともだちをさがす" },
			cost: ["Grass"],
			effect: {
				ja: "自分の山札にある[草]ポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558828,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [252],
};

export default card;
