import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "クチート",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "ツノが 変形して できた 大あごが 頭に ついている。 鉄骨を 噛み切ってしまう。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ダブルイーター"}, "damage": "60x", "cost": ["Psychic", "Colorless"], "effect": {"ja": "自分の手札からエネルギーを2枚までトラッシュし、その枚数×60ダメージ。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [303],

	thirdParty: {
		cardmarket: 867953,
		tcgplayer: 674350,
	},
};

export default card;