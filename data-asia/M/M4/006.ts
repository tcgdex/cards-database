import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリボーグ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "リーフチャージ" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "自分の山札から基本草エネルギーを1枚選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "つるのムチ" },
			damage: 80,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ハリマロン",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [651],
};

export default card;
