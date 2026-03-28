import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマ",
	},

	illustrator: "Kazuhisa Uragami",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "いきなり 後ろ髪に 噛みつき 引っぱっては 人の 驚く 姿を見て 喜んでいる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "かくせい"}, "cost": ["Psychic"], "effect": {"ja": "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [200],
};

export default card;
