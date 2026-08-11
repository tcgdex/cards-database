import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトツキ",
	},

	illustrator: "Apios",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "死者の 魂が 古代の 剣に 宿って 生まれたらしい。 人に とりつき 命を 吸う。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "いあいぎり"}, "damage": 10, "cost": ["Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [679],

	thirdParty: {
		cardmarket: 867977,
		tcgplayer: 674374,
	},
};

export default card;