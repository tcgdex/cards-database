import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴース",
	},

	illustrator: "MARINA Chikazawa",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "ガスから 生まれた 生命体。 毒を含んだ ガスの 体に 包まれると だれでも 気絶する。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ふいをつく"}, "damage": 30, "cost": ["Darkness"], "effect": {"ja": "コインを1回投げウラなら、このワザは失敗。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [92],

	thirdParty: {
		cardmarket: 867969,
		tcgplayer: 674366,
	},
};

export default card;