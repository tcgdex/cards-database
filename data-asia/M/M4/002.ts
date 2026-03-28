import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "コクーン",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "かたいからだ"}, "effect": {"ja": "このポケモンが受けるワザのダメージは「-20」される。"}}],

	attacks: [{"name": {"ja": "ぶらさがる"}, "cost": ["Grass"], "damage": 20}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ビードル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [14],
};

export default card;
