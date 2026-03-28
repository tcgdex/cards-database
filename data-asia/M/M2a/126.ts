import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガカイリューex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 370,
	types: ["Dragon"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "スカイキャリー"}, "effect": {"ja": "自分の番に1回使える。自分のバトルポケモンをベンチポケモンと入れ替える。"}}],

	attacks: [{"name": {"ja": "リューノグライド"}, "cost": ["Water", "Lightning", "Lightning"], "damage": 330, "effect": {"ja": "このポケモンについているエネルギーを2個選び、トラッシュする。"}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ハクリュー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
