import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ロコン",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "自分より 強い 相手に 襲われると キズついた ふりをして 惑わせ その隙に 逃げてしまう。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ふむ"}, "damage": 10, "cost": ["Colorless"]}, {"name": {"ja": "かえん"}, "damage": 20, "cost": ["Fire", "Colorless"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [37],

	thirdParty: {
		cardmarket: 840362,
		tcgplayer: 647176,
	},
};

export default card;