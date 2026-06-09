import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンメル",
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "１２００度の マグマが 体内で 燃えている。 寒くなると マグマが 固まるので 動きが 鈍くなる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "なかまをよぶ"}, "cost": ["Fire"], "effect": {"ja": "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"}}, {"name": {"ja": "ほのお"}, "damage": 30, "cost": ["Fire", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [322],

	thirdParty: {
		cardmarket: 840161,
		tcgplayer: 647121,
	},
};

export default card;