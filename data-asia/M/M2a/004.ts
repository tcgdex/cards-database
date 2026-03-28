import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ケムッソ",
	},

	illustrator: "USGMEN",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "葉っぱが 大好物。 ムックルに 襲われたときは お尻の トゲで 撃退する。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "むしくい"}, "cost": ["Grass"], "damage": 20}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [265],
};

export default card;
