import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "マクノシタ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "厳しい 稽古を 繰り返して 強くなる。 どんな 攻撃にも 耐える 根性の ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "どつく"}, "damage": 10, "cost": ["Fighting"]}, {"name": {"ja": "がちんこ"}, "damage": 30, "cost": ["Fighting", "Fighting"]}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [296],

	thirdParty: {
		cardmarket: 840315,
		tcgplayer: 647133,
	},
};

export default card;