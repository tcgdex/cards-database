import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "マメバッタ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "第３の脚が 畳まれている。 ピンチになると １０メートル以上 ジャンプする 脚力を 持つ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "はねまくる"}, "damage": "10x", "cost": ["Grass"], "effect": {"ja": "コインを3回投げ、オモテの数×10ダメージ。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [919],

	thirdParty: {
		cardmarket: 850516,
		tcgplayer: 655788,
	},
};

export default card;