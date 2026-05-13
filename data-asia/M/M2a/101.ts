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

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "かみつきまわる"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン2匹に、それぞれダメカンを2個のせる。"}}],

	attacks: [{"name": {"ja": "アサシンリターン"}, "damage": "120", "cost": ["Darkness", "Darkness"], "effect": {"ja": "のぞむなら、このポケモンを手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ロケット団のゴルバット",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
