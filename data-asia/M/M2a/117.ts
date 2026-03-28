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

	attacks: [{"name": {"ja": "クイックドロー"}, "cost": ["Metal"], "damage": 50, "effect": {"ja": "自分の山札を2枚引く。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "コマタナ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [625],
};

export default card;
