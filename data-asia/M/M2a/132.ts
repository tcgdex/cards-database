import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラメシヤ",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "食べもしないのに ウデッポウに 食らいつくのは 生きていたころの 行動の 名残りと 言われている。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ちょっとうらむ"}, "damage": "10", "cost": ["Psychic"], "effect": {"ja": ""}}, {"name": {"ja": "かみつく"}, "damage": "40", "cost": ["Fire", "Psychic"], "effect": {"ja": ""}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [885],
};

export default card;
