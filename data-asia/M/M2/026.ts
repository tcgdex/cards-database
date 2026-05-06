import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "スイクン",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "一瞬で 汚く 濁った 水も  清める 力を 持つ。  北風の 生まれ変わり という。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "クリスタルフォール"}, "damage": "30+", "cost": ["Water", "Water"], "effect": {"ja": "自分の場にエネルギーが4個以上あるなら、90ダメージ追加。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [245],

	thirdParty: {
		cardmarket: 850533,
		tcgplayer: 655805,
	},
};

export default card;