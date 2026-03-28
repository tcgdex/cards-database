import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のクロバットex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "かみつきまわる"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン2匹に、それぞれダメカンを2個のせる。"}}],

	attacks: [{"name": {"ja": "アサシンリターン"}, "cost": ["Darkness", "Darkness"], "damage": 120, "effect": {"ja": "のぞむなら、このポケモンを手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ロケット団のゴルバット",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
