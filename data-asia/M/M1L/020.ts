import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "サンド",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "深い穴を 掘って 生活。 危険が 迫ると 体を 丸め 敵の 攻撃を じっと 耐える。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ツメをたてる"}, "damage": 10, "cost": ["Colorless"]}, {"name": {"ja": "どろかけ"}, "damage": 20, "cost": ["Fighting", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [27],

	thirdParty: {
		cardmarket: 840311,
		tcgplayer: 647129,
	},
};

export default card;