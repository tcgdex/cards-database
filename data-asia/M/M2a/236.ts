import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナンジャモのハラバリーex",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "エレキストリーマー"}, "effect": {"ja": "自分の番に何回でも使える。自分の手札から「基本「Lightning」エネルギー」を1枚選び、自分の「ナンジャモのポケモン」につける。"}}],

	attacks: [{"name": {"ja": "サンダーボルト"}, "damage": "230", "cost": ["Lightning", "Lightning", "Lightning"], "effect": {"ja": "次の自分の番、このポケモンはワザが使えない。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ナンジャモのズピカ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
