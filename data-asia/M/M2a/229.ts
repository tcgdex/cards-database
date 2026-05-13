import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガルチャブルex",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "ふんばりボディ"}, "effect": {"ja": "このポケモンが、ワザのダメージを受けてきぜつするとき、自分はコインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。"}}],

	attacks: [{"name": {"ja": "サマーソルトダイブ"}, "damage": "120+", "cost": ["Fighting", "Fighting"], "effect": {"ja": "場にスタジアムが出ているなら、140ダメージ追加。その後、そのスタジアムをトラッシュする。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
