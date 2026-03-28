import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "マユルド",
	},

	illustrator: "June",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "やわらかい 糸で できた 体は 時間と ともに 硬くなっていく。 ひび割れると 進化は 間近だ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "いれかわる"}, "cost": ["Grass"], "effect": {"ja": "このポケモンをベンチポケモンと入れ替える。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ケムッソ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [268],
};

export default card;
