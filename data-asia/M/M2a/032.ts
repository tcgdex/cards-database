import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "コダック",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "いつも 頭痛に 悩まされている。 この 頭痛が 激しくなると 不思議な 力を 使いはじめる。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "しめりけ"}, "effect": {"ja": "このポケモンがいるかぎり、おたがいのポケモン全員は、そのポケモン自身をきぜつさせる効果の特性が、すべてなくなる。"}}],

	attacks: [{"name": {"ja": "ぶつかる"}, "cost": ["Colorless", "Colorless"], "damage": 20}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [54],
};

export default card;
