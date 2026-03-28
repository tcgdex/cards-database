import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒビキのマグカルゴ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "火山の 火口付近で 暮らす。 マグマが 冷えて 固まった 殻に 炎エネルギーを 蓄えている。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "とけてながれる"}, "effect": {"ja": "このポケモンにエネルギーがついていないなら、このポケモンのにげるためのエネルギーは、すべてなくなる。"}}],

	attacks: [{"name": {"ja": "ようがんバースト"}, "cost": ["Fire", "Fire", "Fire"], "damage": "70×", "effect": {"ja": "このポケモンについているエネルギーを5枚までトラッシュし、その枚数×70ダメージ。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヒビキのマグマッグ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [219],
};

export default card;
