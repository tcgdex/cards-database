import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "モクロー",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "狭くて 暗い場所が 落ち着く。 トレーナーの ふところや バッグを 巣の 代わりに することも あるぞ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ともだちをさがす"}, "cost": ["Grass"], "effect": {"ja": "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "たいあたり"}, "damage": 30, "cost": ["Colorless", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [722],

	thirdParty: {
		cardmarket: 867924,
		tcgplayer: 674329,
	},
};

export default card;