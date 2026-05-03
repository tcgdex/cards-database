import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガフシギバナex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 380,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "ソーラートランス"}, "effect": {"ja": "自分の番に何回でも使える。自分の場のポケモンについている「基本エネルギー」を1個選び、自分の別のポケモンにつけ替える。"}}],

	attacks: [{"name": {"ja": "ジャングルダンプ"}, "damage": 240, "cost": ["Grass", "Grass", "Grass", "Grass"], "effect": {"ja": "このポケモンのHPを「30」回復する。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "フシギソウ",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [3],

	suffix: "EX",

	thirdParty: {
		cardmarket: 840371,
		tcgplayer: 647185,
	},
};

export default card;