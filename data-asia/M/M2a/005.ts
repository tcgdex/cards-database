import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "カラサリス",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "糸を 木の枝に 巻きつけている。 糸についた 雨水を 飲みながら 進化の ときを 待っている。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "ふえるまゆ"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「カラサリス」または「マユルド」を1枚選び、ベンチに出す。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "たいあたり"}, "cost": ["Grass"], "damage": 30}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ケムッソ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [266],
};

export default card;
