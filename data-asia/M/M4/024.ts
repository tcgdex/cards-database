import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "クレベース",
	},

	illustrator: "Tomoki Sone",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひょうざんくずし" },
			damage: "60x",
			cost: ["Water"],
			effect: {
				ja: "自分の山札の上から6枚トラッシュする。トラッシュした基本水エネルギーの数×60ダメージ。",
			},
		},
		{
			name: { ja: "フロストスタンプ" },
			damage: 160,
			cost: ["Water", "Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "カチコール",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [713],
};

export default card;
