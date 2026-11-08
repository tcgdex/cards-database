import { Card } from "models/database/card";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロコン",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "自分より 強い 相手に 襲われると キズついた ふりをして 惑わせ その隙に 逃げてしまう。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ふむ"}, "damage": 10, "cost": ["Colorless"]}, {"name": {"ja": "かえん"}, "damage": 20, "cost": ["Fire", "Colorless"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [37],

	thirdParty: {
		cardmarket: 840159,
		tcgplayer: 647119,
	},
};

export default card;