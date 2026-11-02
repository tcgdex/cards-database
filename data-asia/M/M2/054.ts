import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビル",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "薄い 膜で 被われている 両目は 真夜中でも 見える。 数匹の 群れで 暮らしている。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "かみつく"}, "damage": 30, "cost": ["Darkness"]}, {"name": {"ja": "がちんこ"}, "damage": 60, "cost": ["Darkness", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "メグロコ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [552],

	thirdParty: {
		cardmarket: 850561,
		tcgplayer: 655833,
	},
};

export default card;