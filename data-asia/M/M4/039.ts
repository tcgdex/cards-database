import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "のろいのねっこ"}, "cost": ["Psychic"], "damage": 30, "effect": {"ja": "次の相手の番、このワザを受けたポケモンは、手札から出すエネルギーをつけられない。"}}, {"name": {"ja": "オーバーペイン"}, "cost": ["Psychic", "Psychic"], "damage": "60＋", "effect": {"ja": "相手のポケモン全員にのっているダメカンの数×10ダメージ追加。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ボクレー",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [709],
};

export default card;
