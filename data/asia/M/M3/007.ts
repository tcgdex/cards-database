import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "コフキムシ",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "体を 覆う 粉が 体温を 調節するので どんな 気候や 風土の 地域でも 暮らせる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "かじる"}, "damage": 20, "cost": ["Grass"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [664],

	thirdParty: {
		cardmarket: 867921,
		tcgplayer: 674326,
	},
};

export default card;