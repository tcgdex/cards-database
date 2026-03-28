import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガヤンマex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 280,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "バズブースト"}, "effect": {"ja": "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の山札から「基本エネルギー」を3枚まで選び、このポケモンにつける。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "ジェットサイクロン"}, "cost": ["Grass", "Grass", "Grass", "Colorless"], "damage": 210, "effect": {"ja": "このポケモンについているエネルギーを3個選び、ベンチポケモン1匹につけ替える。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ヤンヤンマ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
