import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガルカリオex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "はどうづき"}, "cost": ["Fighting"], "damage": 130, "effect": {"ja": "自分のトラッシュから「基本エネルギー」を3枚まで選び、ベンチポケモンに好きなようにつける。"}}, {"name": {"ja": "メガブレイブ"}, "cost": ["Fighting", "Fighting"], "damage": 270, "effect": {"ja": "次の自分の番、このポケモンは「メガブレイブ」が使えない。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "リオル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
