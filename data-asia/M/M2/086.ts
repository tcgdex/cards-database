import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ワンパチ",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "おやつに 釣られて 人の 仕事を  手伝う 食いしん坊。 パチパチと  電気を まとって ひた走る。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "じゃれつく"}, "damage": "20+", "cost": ["Lightning", "Colorless"], "effect": {"ja": "コインを1回投げオモテなら、20ダメージ追加。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [835],

	thirdParty: {
		cardmarket: 850594,
		tcgplayer: 655865,
	},
};

export default card;