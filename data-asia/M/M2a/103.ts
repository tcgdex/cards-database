import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のドンカラス",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "夜行性。 一声 鳴けば １００匹を 超える 子分の ヤミカラスが 集結する。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ロケットフェザー"}, "cost": ["Colorless", "Colorless"], "damage": "60×", "effect": {"ja": "自分の手札から、名前に「ロケット団」とつくサポートを好きなだけトラッシュし、その枚数×60ダメージ。"}}, {"name": {"ja": "ぶちかます"}, "cost": ["Darkness", "Colorless", "Colorless"], "damage": 100}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ロケット団のヤミカラス",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [430],
};

export default card;
