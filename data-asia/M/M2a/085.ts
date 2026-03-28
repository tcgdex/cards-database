import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "チャーレム",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測することが できるのだ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "セブンスキック"}, "cost": ["Fighting"], "damage": 150, "effect": {"ja": "自分の手札が7枚でないなら、このワザは失敗。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "アサナン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [308],
};

export default card;
