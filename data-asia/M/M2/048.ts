import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "自分が 目立たないよう 暗闇に まぎれて 獲物に 襲いかかる とても ずる賢い ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ツメをたてる"}, "damage": 10, "cost": ["Darkness"]}, {"name": {"ja": "ひっかく"}, "damage": 30, "cost": ["Darkness", "Darkness"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [215],

	thirdParty: {
		cardmarket: 850555,
		tcgplayer: 655827,
	},
};

export default card;