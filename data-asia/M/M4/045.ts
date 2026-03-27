import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンファン",
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たたみかける" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "次の自分の番、このポケモンのワザのダメージは相手のバトルポケモンに「120」多くなる。",
			},
		},
		{
			name: { ja: "スマッシュヘッド" },
			damage: 180,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ゴマゾウ",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [232],
};

export default card;
