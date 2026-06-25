import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "エクスレッグ",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "本気になると 畳んでいた 脚で 立ち上がり 決戦モードになる。 短時間で 敵を 制圧する。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "けたぐり"}, "damage": 30, "cost": ["Grass"]}, {"name": {"ja": "ジャンプシュート"}, "damage": 150, "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンと、ついているすべてのカードを、山札にもどして切る。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "マメバッタ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [920],

	thirdParty: {
		cardmarket: 850517,
		tcgplayer: 655789,
	},
};

export default card;