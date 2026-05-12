import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガシビルドンex",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 350,
	types: ["Lightning"],

	stage: "Stage2",

	attacks: [{"name": {"ja": "ばくれつだん"}, "damage": "", "cost": ["Lightning", "Lightning"], "effect": {"ja": "相手のポケモン2匹に、それぞれ60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}, {"name": {"ja": "ディザスターショック"}, "damage": "190", "cost": ["Lightning", "Lightning", "Lightning"], "effect": {"ja": "のぞむなら、このポケモンについている「Lightning」エネルギーを2個トラッシュし、相手のバトルポケモンをマヒにする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "シビビール",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
