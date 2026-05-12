import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スカンプー",
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "お尻から 飛ばす 液体の 臭いは ２キロも 離れた 人が 具合を 悪くするほど くさい。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "ひっかく" }, "damage": "20", "cost": ["Darkness"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Fighting", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [434],
	regulationMark: "I",
};

export default card;
