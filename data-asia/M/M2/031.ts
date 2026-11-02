import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワン",
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "電気の 力で 脚力を  増強。 トップスピードは  時速 ９０キロを 軽く 超える。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "エレキラン"}, "damage": "70+", "cost": ["Lightning", "Colorless"], "effect": {"ja": "コインを1回投げオモテなら、70ダメージ追加。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ワンパチ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [836],

	thirdParty: {
		cardmarket: 850538,
		tcgplayer: 655810,
	},
};

export default card;