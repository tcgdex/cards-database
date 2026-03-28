import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "テールナー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "かえんほうしゃ"}, "cost": ["Fire", "Fire"], "damage": 80, "effect": {"ja": "このポケモンについているエネルギーを1個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "フォッコ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [654],
};

export default card;
