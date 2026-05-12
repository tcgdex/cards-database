import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ジグザグマ",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "落ち着きなく 走りまわっている。  ほかの ポケモンを 見つけると  わざと ぶつかって ケンカを 売る。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "かじる"}, "damage": "10", "cost": ["Darkness"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [263],
};

export default card;
