import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "エルフーン",
	},

	illustrator: "Yuka Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "どんなに 細い 隙間でも 風のように 潜り抜けてしまう。 白い 毛玉を 残していく。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "いやしのわたげ"}, "cost": ["Colorless"], "effect": {"ja": "自分のベンチポケモン1匹のHPを、すべて回復する。"}}, {"name": {"ja": "とんぼがえり"}, "damage": 50, "cost": ["Psychic"], "effect": {"ja": "このポケモンをベンチポケモンと入れ替える。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "エルフーンex",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [547],

	thirdParty: {
		cardmarket: 850545,
		tcgplayer: 655817,
	},
};

export default card;