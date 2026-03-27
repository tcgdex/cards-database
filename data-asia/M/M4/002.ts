import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "コクーン",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かたいからだ" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「20」少なくなる。（弱点・抵抗力を計算した後に適用する。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶらさがる" },
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ビードル",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [14],
};

export default card;
