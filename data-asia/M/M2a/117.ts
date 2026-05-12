import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "キリキザン",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "体中の 鋭利な 刃で 容赦なく 相手を 切り刻む。 勝つために 手段は 選ばない。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "クイックドロー"}, "damage": "50", "cost": ["Metal"], "effect": {"ja": "自分の山札を2枚引く。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "コマタナ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [625],
};

export default card;
