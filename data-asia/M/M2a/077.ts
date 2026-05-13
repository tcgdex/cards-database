import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのボクレー",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "森で さまよい 死んだ 子供の 魂が 切り株に 宿り ポケモンになったと いわれている。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "はねてかわす"}, "damage": "10", "cost": ["Colorless"], "effect": {"ja": "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [708],
};

export default card;
