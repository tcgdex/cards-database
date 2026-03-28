import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナのガブリアスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "スクリューダイブ"}, "cost": ["Fighting"], "damage": 100, "effect": {"ja": "のぞむなら、自分の手札が6枚になるように、山札を引く。"}}, {"name": {"ja": "リューノバスター"}, "cost": ["Fighting", "Fighting"], "damage": 260, "effect": {"ja": "このポケモンについているエネルギーを、すべてトラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "シロナのガバイト",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
