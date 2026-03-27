import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルホッグ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みはる" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「30」少なくなる。",
			},
		},
		{
			name: { ja: "ハイパーファング" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ミネズミ",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [505],
};

export default card;
