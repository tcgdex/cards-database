import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "グラシデアの花が 咲く 季節 感謝の 心を 届けるために 飛び立つと 言われている。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "はなのカーテン"}, "effect": {"ja": "このポケモンがいるかぎり、自分のベンチポケモン（「ルールを持つポケモン」をのぞく）全員は、相手のワザのダメージを受けない。"}}],

	attacks: [{"name": {"ja": "けとばす"}, "cost": ["Colorless", "Colorless"], "damage": 30}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [492],
};

export default card;
