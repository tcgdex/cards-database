import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴマゾウ",
	},

	illustrator: "Akino Fukuji",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "見た目より ずっと 力持ち。 振りまわす 鼻に ぶつかると 腕の 骨が もっていかれる。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "どろかけ" }, "damage": "10", "cost": ["Fighting"], "effect": { "ja": "" } },
		{ "name": { "ja": "ころがる" }, "damage": "40", "cost": [], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Grass", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [231],
	regulationMark: "I",
};

export default card;
