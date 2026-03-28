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
		ja: "新しい 火山が できるたび 生まれてくると 伝えられる 大地を 駆け巡る ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "フレアフォール"}, "cost": ["Fire", "Fire"], "damage": "30＋", "effect": {"ja": "自分の場にエネルギーが4個以上あるなら、90ダメージ追加。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [244],
};

export default card;
