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

	stage: "Stage1",

	attacks: [{"name": {"ja": "はどうづき"}, "damage": "130", "cost": ["Fighting"], "effect": {"ja": "自分のトラッシュから「基本「Fighting」エネルギー」を3枚まで選び、ベンチポケモンに好きなようにつける。"}}, {"name": {"ja": "メガブレイブ"}, "damage": "270", "cost": ["Fighting", "Fighting"], "effect": {"ja": "次の自分の番、このポケモンは「メガブレイブ」が使えない。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "リオル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
