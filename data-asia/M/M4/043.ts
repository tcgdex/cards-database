import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ウソッキー",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しれんのたび" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「へんかのしょ」を2枚まで選び、相手に見せてから手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "いわとばし" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "このワザのダメージは、相手の抵抗力の影響を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [185],
};

export default card;
