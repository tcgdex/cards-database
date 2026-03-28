import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガサーナイトex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 360,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "あふれるねがい"}, "cost": ["Psychic"], "effect": {"ja": "自分のベンチポケモン全員に、山札から「基本エネルギー」を1枚ずつつける。そして山札を切る。"}}, {"name": {"ja": "メガシンフォニア"}, "cost": ["Psychic"], "damage": "50×", "effect": {"ja": "自分のポケモン全員についているエネルギーの数×50ダメージ。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
