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
		ja: "２匹の ダンバルが 合体した。 鋼の ボディは ジェット機と 衝突しても 傷つかない。",
	},

	stage: "Stage1",
	attacks: [
		{ "name": { "ja": "メタルクロー" }, "damage": "30", "cost": ["Metal"], "effect": { "ja": "" } },
		{ "name": { "ja": "ガードプレス" }, "damage": "70", "cost": ["Metal", "Metal"], "effect": { "ja": "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。" } }
	],

	
	weaknesses: [{ "type": "Fire", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "ダンバル",
	},
	rarity: "Common",
	dexId: [375],
	regulationMark: "I",
};

export default card;
