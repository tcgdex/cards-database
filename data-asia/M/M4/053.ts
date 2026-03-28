import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スカタンク",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "うしろげり"}, "cost": ["Darkness"], "damage": 40}, {"name": {"ja": "スマッシュターン"}, "cost": ["Darkness", "Darkness", "Colorless"], "damage": 100, "effect": {"ja": "このポケモンをベンチポケモンと入れ替える。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "スカンプー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [435],
};

export default card;
