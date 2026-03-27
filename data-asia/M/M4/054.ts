import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤブクロン",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アシッドボム" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げ、オモテなら、相手のバトルポケモンについているエネルギーを1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [568],
};

export default card;
