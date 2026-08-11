import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘイガニ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "外国から やってきた。 汚れた 川でも どんどん 増えていく 強い 生命力の 持ち主。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "はさむ"}, "damage": 10, "cost": ["Colorless"]}, {"name": {"ja": "とっしん"}, "damage": 30, "cost": ["Colorless", "Colorless"], "effect": {"ja": "このポケモンにも10ダメージ。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [341],

	thirdParty: {
		cardmarket: 840309,
		tcgplayer: 647127,
	},
};

export default card;