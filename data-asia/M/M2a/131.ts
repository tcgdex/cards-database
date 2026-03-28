import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバーン",
	},

	illustrator: "Natsumi Miyanose",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "月明かりすら ない 闇夜を 飛び 油断している 獲物を 襲う。 暗闇の 戦いでは 無敵だ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "こうそくいどう"}, "cost": ["Colorless", "Colorless"], "damage": 40, "effect": {"ja": "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"}}, {"name": {"ja": "きょうかスラッシュ"}, "cost": ["Psychic", "Darkness"], "damage": "70＋", "effect": {"ja": "このポケモンに「ポケモンのどうぐ」がついているなら、70ダメージ追加。"}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "オンバット",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [715],
};

export default card;
