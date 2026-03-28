import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デンリュウ",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "シンクロパルス"}, "effect": {"ja": "自分の手札と相手の手札が同じ枚数なら、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+80」される。"}}],

	attacks: [{"name": {"ja": "フラッシュボルト"}, "cost": ["Lightning", "Colorless"], "damage": 140, "effect": {"ja": "次の自分の番、このポケモンは「フラッシュボルト」が使えない。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "モココ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [181],
};

export default card;
