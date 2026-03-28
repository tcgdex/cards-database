import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ゲノムチャージ"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。"}}, {"name": {"ja": "サイコキネシス"}, "cost": ["Psychic", "Psychic", "Colorless"], "damage": "80＋", "effect": {"ja": "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [386],
};

export default card;
