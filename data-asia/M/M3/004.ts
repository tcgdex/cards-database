import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ツタージャ",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "群れることを 好まない 性質。 短い 腕の 代わりに ツルを 器用に 操り 暮らしている。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "とつげき"}, "damage": 30, "cost": ["Grass"], "effect": {"ja": "このポケモンにも10ダメージ。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [495],

	thirdParty: {
		cardmarket: 867918,
		tcgplayer: 674323,
	},
};

export default card;