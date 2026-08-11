import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤングース",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "胴体の ほとんどが 胃袋。 毎日 同じ ルートを うろつき 新鮮な エサを 探してまわる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "もってくる"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札を1枚引く。"}}, {"name": {"ja": "かじる"}, "damage": 20, "cost": ["Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [734],

	thirdParty: {
		cardmarket: 840350,
		tcgplayer: 647164,
	},
};

export default card;