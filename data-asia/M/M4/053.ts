import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スカタンク",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "尻尾の 先から くさい 臭いの 液体を 飛ばして 攻撃。 連射すると 臭いは 弱まる。",
	},

	stage: "Stage1",
	attacks: [
		{ "name": { "ja": "うしろげり" }, "damage": "40", "cost": ["Darkness"], "effect": { "ja": "" } },
		{ "name": { "ja": "スマッシュターン" }, "damage": "100", "cost": ["Darkness", "Darkness"], "effect": { "ja": "このポケモンをベンチポケモンと入れ替える。" } }
	],

	
	weaknesses: [{ "type": "Fighting", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "スカンプー",
	},
	rarity: "Uncommon",
	dexId: [435],
	regulationMark: "I",
};

export default card;
