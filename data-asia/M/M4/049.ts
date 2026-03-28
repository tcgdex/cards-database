import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルバット",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "おんみつひこう"}, "cost": ["Darkness"], "damage": 30, "effect": {"ja": "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ズバット",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [42],
};

export default card;
