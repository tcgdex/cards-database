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

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "フェアリーゾーン"}, "effect": {"ja": "このポケモンがいるかぎり、相手の場の「Dragon」ポケモン全員の弱点は、すべて「Psychic」タイプになる。［弱点は「×2」で計算する。］"}}],

	attacks: [{"name": {"ja": "フルムーンロンド"}, "damage": "20+", "cost": ["Psychic"], "effect": {"ja": "おたがいのベンチポケモンの数×20ダメージ追加。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
