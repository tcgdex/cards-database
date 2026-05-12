import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒビキのカイロス",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ツノで 獲物を 挟みこみ そのまま まっぷたつに するか 強引に 投げ飛ばしてしまう。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "はさむ"}, "damage": "20", "cost": ["Grass"], "effect": {"ja": ""}}, {"name": {"ja": "いっぽんがえし"}, "damage": "70+", "cost": [], "effect": {"ja": "前の相手の番に、ワザのダメージで、自分の「ヒビキのポケモン」がきぜつしていたなら、100ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [127],
};

export default card;
