import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "テールナー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かえんほうしゃ" },
			damage: 80,
			cost: ["Fire", "Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "フォッコ",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [654],
};

export default card;
