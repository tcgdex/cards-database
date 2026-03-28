import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナのフカマル",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "穴倉に 潜み 獲物や 敵が 横切ると 飛びだして 噛みつく。 勢い余り 歯が 欠けることも。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "いわとばし"}, "cost": ["Fighting"], "damage": 20, "effect": {"ja": "このワザのダメージは抵抗力を計算しない。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [443],
};

export default card;
