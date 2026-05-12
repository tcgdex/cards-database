import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメラ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "ヌメヌメの 粘膜で 覆われた 体は 敵の パンチや キックを ヌルリと 滑らせてしまうのだ。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "すいとる" }, "damage": "30", "cost": ["Water", "Psychic"], "effect": { "ja": "このポケモンのHPを「30」回復する。" } }
	],

	
	weaknesses: [],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [704],
	regulationMark: "I",
};

export default card;
