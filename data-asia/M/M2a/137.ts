import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホーホー",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "正確に 時を 告げることから 世界の ことわりを わきまえた 知恵の神様 とする 国もある。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "さんどづき"}, "damage": "10x", "cost": ["Colorless"], "effect": {"ja": "コインを3回投げ、オモテの数×10ダメージ。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [163],
};

export default card;
