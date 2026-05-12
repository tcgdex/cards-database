import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "エンテイ",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "新しい 火山が できるたび  生まれてくると 伝えられる  大地を 駆け巡る ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "フレアフォール"}, "damage": "30+", "cost": ["Fire", "Fire"], "effect": {"ja": "自分の場に「Fire」エネルギーが4個以上あるなら、90ダメージ追加。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [244],
};

export default card;
