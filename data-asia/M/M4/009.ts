import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコン",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きゅうびうつし" },
			cost: ["Fire"],
			effect: {
				ja: "自分のベンチポケモン1匹にのっているダメージカウンターを全部、相手のバトルポケモンに移す。",
			},
		},
		{
			name: { ja: "おにび" },
			damage: 70,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ロコン",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [38],
};

export default card;
