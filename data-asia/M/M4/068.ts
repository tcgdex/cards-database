import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ミネズミ",
	},

	illustrator: "SHIN NAGASAWA",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっかい" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げ、オモテなら、相手の山札の上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [504],
};

export default card;
