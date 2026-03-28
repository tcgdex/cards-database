import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ソウブレイズex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "しんえんほむら"}, "cost": ["Fire"], "damage": "30＋", "effect": {"ja": "自分のトラッシュにあるエネルギーの枚数×20ダメージ追加。"}}, {"name": {"ja": "アメジストレイジ"}, "cost": ["Fire", "Psychic", "Metal"], "damage": 280, "effect": {"ja": "このポケモンについているエネルギーを、すべてトラッシュする。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "カルボウ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
