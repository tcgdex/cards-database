import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "ドーミラーの 背中の 模様には 神秘的な 力が 宿ると 昔の 人たちは 信じていた。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "てっぺき"}, "cost": ["Colorless"], "effect": {"ja": "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。"}}, {"name": {"ja": "ころがる"}, "damage": 30, "cost": ["Colorless", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [436],

	thirdParty: {
		cardmarket: 850566,
		tcgplayer: 655838,
	},
};

export default card;