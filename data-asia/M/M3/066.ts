import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "トリミアン",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "大昔の カロス地方では 王様を 護衛する 役目を 与えられた ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ハンドカット"}, "cost": ["Colorless"], "effect": {"ja": "相手の手札を、オモテを見ないで5枚になるように、トラッシュする。"}}, {"name": {"ja": "ずつき"}, "damage": 30, "cost": ["Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [676],

	thirdParty: {
		cardmarket: 868050,
		tcgplayer: 674385,
	},
};

export default card;