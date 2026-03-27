import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロス",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "はねかえす" },
			damage: 60,
			cost: ["Metal"],
			effect: {
				ja: "相手のバトルポケモンをベンチに戻す。",
			},
		},
		{
			name: { ja: "メタリックハンマー" },
			damage: "150+",
			cost: ["Metal", "Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンについている鋼エネルギーを3個トラッシュしてもよい。そうした場合、このワザのダメージは「150」多くなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	evolveFrom: {
		ja: "メタング",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [376],
};

export default card;
