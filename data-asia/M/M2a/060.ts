import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエのピッピex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "フェアリーゾーン"}, "effect": {"ja": "このポケモンがいるかぎり、相手の場のポケモン全員の弱点は、すべてタイプになる。［弱点は「×2」で計算する。］"}}],

	attacks: [{"name": {"ja": "フルムーンロンド"}, "cost": ["Psychic", "Colorless"], "damage": "20＋", "effect": {"ja": "おたがいのベンチポケモンの数×20ダメージ追加。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
