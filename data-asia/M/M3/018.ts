import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "パウワウ",
	},

	illustrator: "Kanami Ogata",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "寒くなるほど 元気になって 氷の 浮かぶ 冷たい 海を うれしそうに 泳ぎまわる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "みずかけ"}, "damage": 10, "cost": ["Water"]}, {"name": {"ja": "スプラッシュ"}, "damage": 30, "cost": ["Water", "Water"]}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [86],

	thirdParty: {
		cardmarket: 867932,
		tcgplayer: 674337,
	},
};

export default card;