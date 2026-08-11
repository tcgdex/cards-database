import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "キバニア",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "鋭い キバと たくましい 顎を もつ。 船乗りたちは キバニアの すみかには けっして 近づかない。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "とつげき"}, "damage": 30, "cost": ["Darkness"], "effect": {"ja": "このポケモンにも10ダメージ。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [318],

	thirdParty: {
		cardmarket: 850557,
		tcgplayer: 655829,
	},
};

export default card;