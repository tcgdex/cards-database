import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メタング",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "メタルクロー"}, "cost": ["Metal"], "damage": 30}, {"name": {"ja": "ガードプレス"}, "cost": ["Metal", "Metal", "Colorless"], "damage": 70, "effect": {"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ダンバル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [375],
};

export default card;
