import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒポポタス",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "全身に 砂を まとうことで ばい菌から 体を 守る。 水に 濡れることが 苦手。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "すなかけ"}, "damage": 10, "cost": ["Fighting"], "effect": {"ja": "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。"}}, {"name": {"ja": "かみつく"}, "damage": 60, "cost": ["Fighting", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Common",
	dexId: [449],

	thirdParty: {
		cardmarket: 867960,
		tcgplayer: 674357,
	},
};

export default card;