import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デンリュウ",
	},

	illustrator: "CHORISO",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シンクロパルス" },
			effect: {
				ja: "自分の手札の枚数と相手の手札の枚数が同じなら、このポケモンのワザのダメージは「80」多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フラッシュボルト" },
			damage: 140,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「フラッシュボルト」を使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "モココ",
	},

	variants: [{ type: "holo" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [181],
};

export default card;
