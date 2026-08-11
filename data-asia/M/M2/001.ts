import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ナゾノクサ",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "別名 アルキメンデス。 夜になると ２本の 根っこで ３００メートルも 歩くという。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "タネばくだん"}, "damage": 20, "cost": ["Grass"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [43],

	thirdParty: {
		cardmarket: 850508,
		tcgplayer: 655780,
	},
};

export default card;