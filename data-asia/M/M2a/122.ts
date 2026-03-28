import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリジュラスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "ごうきんビルド"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモンに好きなようにつける。"}}],

	attacks: [{"name": {"ja": "メタルディフェンダー"}, "cost": ["Metal", "Metal", "Metal"], "damage": 220, "effect": {"ja": "次の相手の番、このポケモンの弱点は、すべてなくなる。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ジュラルドン",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
