import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ウソッキー",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "しれんのたび"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札から「変化の書」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "いわとばし"}, "cost": ["Fighting"], "damage": 30, "effect": {"ja": "このワザのダメージは抵抗力を計算しない。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [185],
};

export default card;
