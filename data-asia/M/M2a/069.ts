import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラルトス",
	},

	illustrator: "Terada Tera",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "人の 感情を 頭の 赤い ツノで 敏感に キャッチする 力を 持つ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "もってくる"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札を1枚引く。"}}, {"name": {"ja": "ずつき"}, "cost": ["Psychic"], "damage": 10}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [280],
};

export default card;
