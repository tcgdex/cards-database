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

	stage: "Stage2",

	attacks: [{"name": {"ja": "スクリューダイブ"}, "damage": "100", "cost": ["Fighting"], "effect": {"ja": "のぞむなら、自分の手札が6枚になるように、山札を引く。"}}, {"name": {"ja": "リューノバスター"}, "damage": "260", "cost": ["Fighting", "Fighting"], "effect": {"ja": "このポケモンについているエネルギーを、すべてトラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "シロナのガバイト",
	},
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
