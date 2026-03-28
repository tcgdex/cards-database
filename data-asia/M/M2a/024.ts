import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポカブ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "敵の 攻撃を 身軽に 避けて 鼻から 火の玉を 撃ち出す。 炎で 木の実を 焼いて 食べる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "たいあたり"}, "cost": ["Fire"], "damage": 10}, {"name": {"ja": "ころがる"}, "cost": ["Fire", "Fire"], "damage": 30}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [498],
};

export default card;
