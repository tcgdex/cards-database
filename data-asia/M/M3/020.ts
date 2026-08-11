import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトデマン",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "体の 中心で 光る コアが ある限り 体が ちぎれても 再生できる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "みずでっぽう"}, "damage": 20, "cost": ["Water"]}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [120],

	thirdParty: {
		cardmarket: 867934,
		tcgplayer: 674339,
	},
};

export default card;