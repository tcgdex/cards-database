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

	attacks: [{"name": {"ja": "ちょっとうらむ"}, "cost": ["Psychic"], "damage": 10}, {"name": {"ja": "かみつく"}, "cost": ["Fire", "Psychic"], "damage": 40}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [885],
};

export default card;
