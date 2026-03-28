import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴロンダ",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "気性が 荒く ケンカっ早いが 弱いものいじめは 許さない。 葉っぱで 敵の 動きを 読む。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "どつく"}, "cost": ["Darkness"], "damage": 40}, {"name": {"ja": "おやぶんパンチ"}, "cost": ["Darkness", "Darkness", "Colorless"], "damage": "80＋", "effect": {"ja": "自分のベンチの「ヤンチャム」にダメカンがのっているなら、120ダメージ追加。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヤンチャム",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [675],
};

export default card;
