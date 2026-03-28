import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デリバード",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ハッピープレゼント"}, "cost": ["Colorless"], "effect": {"ja": "おたがいのプレイヤーは、のぞむなら、それぞれ自分の手札から基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。（相手から行う。）"}}, {"name": {"ja": "はばたく"}, "cost": ["Colorless", "Colorless"], "damage": 40}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [225],
};

export default card;
