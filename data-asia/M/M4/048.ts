import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ズバット",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "口から 出す 超音波で まわりの 様子を 探る。 狭い 洞窟も 器用に 飛びまわる。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "ちょうおんぱ" }, "damage": "", "cost": ["Darkness"], "effect": { "ja": "相手のバトルポケモンをこんらんにする。" } }
	],

	
	weaknesses: [{ "type": "Lightning", "value": "x2" }],
	
	resistances: [],
	

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [41],
	regulationMark: "I",
};

export default card;
