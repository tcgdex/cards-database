import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シビビール",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "丸い 模様が 発電 器官。 相手に 巻きついてから 模様を 押しつけて 電気を 流すのだ。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "エレキダイナモ"}, "effect": {"ja": "自分の番に1回使える。自分のトラッシュから「基本「Lightning」エネルギー」を1枚選び、ベンチポケモンにつける。"}}],

	attacks: [{"name": {"ja": "ライトニングボール"}, "damage": "50", "cost": ["Lightning", "Lightning"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "シビシラス",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [603],
};

export default card;
