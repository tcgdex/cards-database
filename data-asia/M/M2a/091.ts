import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "リオル",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "かそくづき"}, "cost": ["Fighting"], "damage": 30, "effect": {"ja": "次の自分の番、このポケモンは「かそくづき」が使えない。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [447],
};

export default card;
