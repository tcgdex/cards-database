import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パモ",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "頬の 電気袋は 未発達。 前脚の 肉球で 懸命に 擦ると ようやく 発電できる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "なきごえ"}, "cost": ["Lightning"], "effect": {"ja": "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。"}}, {"name": {"ja": "プチでんき"}, "damage": 10, "cost": ["Lightning"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [921],

	thirdParty: {
		cardmarket: 850539,
		tcgplayer: 655811,
	},
};

export default card;