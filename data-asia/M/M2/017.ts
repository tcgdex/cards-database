import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラム",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "人が 真実を 蔑ろにして 欲に まみれると 炎で 国を 焼きつくすと 神話に 描かれた。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "かえん"}, "damage": 30, "cost": ["Fire"]}, {"name": {"ja": "バーニングフレア"}, "damage": 240, "cost": ["Fire", "Fire", "Fire", "Fire"], "effect": {"ja": "このポケモンにも60ダメージ。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [643],

	thirdParty: {
		cardmarket: 850524,
		tcgplayer: 655796,
	},
};

export default card;