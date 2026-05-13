import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルタンク",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "毎日 ミルクを 搾らないと 具合が 悪くなる。 ミルクの 味は 季節によって 変わるぞ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "まんぷくミルク"}, "cost": ["Colorless", "Colorless"], "effect": {"ja": "コインを2回投げ、すべてオモテなら、自分のポケモン1匹のHPを、すべて回復する。"}}, {"name": {"ja": "たいあたり"}, "damage": 60, "cost": ["Colorless", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [241],

	thirdParty: {
		cardmarket: 840349,
		tcgplayer: 647163,
	},
};

export default card;