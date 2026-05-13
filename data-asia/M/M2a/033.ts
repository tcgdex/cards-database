import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルダック",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "水かきのついた 長い 手足を 使い 全力で 泳ぎだすと なぜか 額が 光り輝く。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "しめりけ"}, "effect": {"ja": "このポケモンがいるかぎり、おたがいのポケモン全員は、そのポケモン自身をきぜつさせる効果の特性が、すべてなくなる。"}}],

	attacks: [{"name": {"ja": "ハイドロポンプ"}, "damage": "60+", "cost": [], "effect": {"ja": "このポケモンについている「Water」エネルギーの数×20ダメージ追加。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "コダック",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [55],
};

export default card;
