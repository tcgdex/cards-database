import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ハスボー",
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "頭の 葉っぱは 汚れを 弾く 性質。 泥だらけの ポケモンを 乗せても 葉っぱは きれいなままだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ずつき"}, "damage": 30, "cost": ["Grass", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [270],

	thirdParty: {
		cardmarket: 850512,
		tcgplayer: 655784,
	},
};

export default card;