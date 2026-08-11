import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ノズパス",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "ピンチになると 磁力を 強め まわりにある 鉄の 塊を 引き寄せて 身を守ることも ある。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "いわころがり"}, "damage": 40, "cost": ["Fighting", "Fighting"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [299],

	thirdParty: {
		cardmarket: 867958,
		tcgplayer: 674355,
	},
};

export default card;