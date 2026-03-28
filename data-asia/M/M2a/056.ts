import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナンジャモのズピカ",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "尻尾を 振って 発電する。 危険を 感じると 頭を 点滅させて 仲間に 伝える。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "プチでんき"}, "cost": ["Lightning", "Colorless"], "damage": 30}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [938],
};

export default card;
