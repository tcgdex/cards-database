import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エネコ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "動くものを つい 追ってしまう。 自分の 尻尾を 追いかけて 同じ 場所を グルグル 回る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863886,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [300],
};

export default card;
