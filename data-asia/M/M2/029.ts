import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトムex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "マルチアダプタ"}, "effect": {"ja": "このポケモンがいるかぎり、名前に「ロトム」とつく自分のポケモン全員は、それぞれ「ポケモンのどうぐ」を2枚までつけられる。（この特性がなくなったとき、多くついている「ポケモンのどうぐ」をトラッシュする。）"}}],

	attacks: [{"name": {"ja": "10まんボルト"}, "damage": 130, "cost": ["Lightning", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーを、すべてトラッシュする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [479],

	suffix: "EX",

	thirdParty: {
		cardmarket: 850536,
		tcgplayer: 655808,
	},
};

export default card;