import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマ",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "真夜中 人を 驚かせては 怖がる心を 集めて 自分の エネルギーに している ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ちょっとうらむ"}, "damage": 20, "cost": ["Psychic"]}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [200],

	thirdParty: {
		cardmarket: 850542,
		tcgplayer: 655814,
	},
};

export default card;