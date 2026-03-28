import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロス",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "はねかえす"}, "cost": ["Metal"], "damage": 60, "effect": {"ja": "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"}}, {"name": {"ja": "メタリックハンマー"}, "cost": ["Metal", "Metal", "Metal", "Colorless"], "damage": "150＋", "effect": {"ja": "のぞむなら、このポケモンについているエネルギーを3個トラッシュし、150ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "メタング",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [376],
};

export default card;
