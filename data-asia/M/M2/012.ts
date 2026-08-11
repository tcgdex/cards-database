import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "リザード",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "燃える 尻尾を 振りまわすと まわりの 温度が どんどん 上がって 相手を 苦しめる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ひをはく"}, "damage": 40, "cost": ["Fire"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヒトカゲ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [5],

	thirdParty: {
		cardmarket: 850519,
		tcgplayer: 655791,
	},
};

export default card;