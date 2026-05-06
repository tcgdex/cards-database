import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "メガサメハダーex",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "よくばるキバ"}, "damage": 70, "cost": ["Darkness"], "effect": {"ja": "自分の山札を2枚引く。"}}, {"name": {"ja": "ハングリージョー"}, "damage": "120+", "cost": ["Darkness", "Darkness"], "effect": {"ja": "このポケモンにダメカンがのっているなら、150ダメージ追加。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "キバニア",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [319],

	thirdParty: {
		cardmarket: 850621,
		tcgplayer: 655889,
	},
};

export default card;