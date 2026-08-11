import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "メグロコ",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "砂の中に 潜り 泳ぐように 移動。 敵に みつからないためと 体温を 下げない 知恵 なのだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ぶつかる"}, "damage": 10, "cost": ["Darkness"]}, {"name": {"ja": "うしろげり"}, "damage": 20, "cost": ["Darkness", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [551],

	thirdParty: {
		cardmarket: 850560,
		tcgplayer: 655832,
	},
};

export default card;