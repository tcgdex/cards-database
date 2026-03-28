import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・コケコ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "守り神と 呼ばれるが 気分を 害する 人間や ポケモンには 襲い掛かる 荒ぶる神 でもある。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ファストフライト"}, "cost": ["Lightning"], "effect": {"ja": "このワザは、先攻プレイヤーの最初の番でも使える。自分の手札をすべてトラッシュし、山札を5枚引く。"}}, {"name": {"ja": "サンダーブラスト"}, "cost": ["Lightning", "Lightning", "Colorless"], "damage": 130, "effect": {"ja": "このポケモンについているエネルギーを2個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [785],
};

export default card;
