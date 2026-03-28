import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "バッフロン",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "頭突きだけで 車を 潰す。 頭の 毛が 大きいほど 群れでの 地位が 上がるのだ。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "カーリーウォール"}, "effect": {"ja": "このポケモンと、自分の別の「バッフロン」がいるかぎり、自分のタイプのたねポケモン全員が、相手のポケモンから受けるワザのダメージは「-60」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。"}}],

	attacks: [{"name": {"ja": "そこぢから"}, "cost": ["Colorless", "Colorless", "Colorless"], "damage": 130, "effect": {"ja": "次の自分の番、このポケモンはワザが使えない。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [626],
};

export default card;
