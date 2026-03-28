import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "刃の 刃こぼれは 命取り。 戦いが 終わると お気に入りの 砥石で 念入りに 手入れする。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "つきとばす"}, "cost": ["Metal"], "damage": 10, "effect": {"ja": "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [624],
};

export default card;
