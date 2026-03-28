import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "パンプジンex",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ホラーロンド"}, "cost": ["Psychic"], "damage": "30＋", "effect": {"ja": "ダメカンがのっている自分のベンチポケモンの数×50ダメージ追加。"}}, {"name": {"ja": "ゴーストタッチ"}, "cost": ["Psychic", "Psychic"], "damage": 140, "effect": {"ja": "相手の手札からオモテを見ないで1枚選び、トラッシュする。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "バケッチャ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [711],
	suffix: "EX",
};

export default card;
