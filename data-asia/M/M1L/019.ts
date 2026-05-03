import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "コレクレー",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "およそ１５００年前 宝箱の中で 生まれた。 宝を 盗む 不埒者の 生気を 吸い取る。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ビンタ"}, "damage": 10, "cost": ["Colorless"]}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [999],

	thirdParty: {
		cardmarket: 840310,
		tcgplayer: 647128,
	},
};

export default card;