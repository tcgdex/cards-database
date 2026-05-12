import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤジロン",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "一本足で 回転しながら 移動する。  逆さまに なって  回転する ヤジロンも 見かける。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "れんぞくスピン" }, "damage": "30x", "cost": ["Fighting"], "effect": { "ja": "ウラが出るまでコインを投げ、オモテの数×30ダメージ。" } }
	],

	
	weaknesses: [{ "type": "Grass", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [343],
	regulationMark: "I",
};

export default card;
