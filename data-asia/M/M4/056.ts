import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "クズモー",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "腐った 海藻に 擬態する。 気づかずに 近寄ってきた 獲物に 毒液を 浴びせて 仕留める。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "ひっかける" }, "damage": "10", "cost": ["Colorless"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Fighting", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [690],
	regulationMark: "I",
};

export default card;
