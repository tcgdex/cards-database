import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのウールー",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "毛が 伸びすぎると 動けない。 ウールーの 体毛で 織られた 布は 驚くほど 丈夫。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "けとばす"}, "cost": ["Colorless", "Colorless", "Colorless"], "damage": 50}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [831],
};

export default card;
