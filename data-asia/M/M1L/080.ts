import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガクチートex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "がっつく"}, "damage": "80x", "cost": ["Metal", "Metal"], "effect": {"ja": "自分がすでにとったサイドの枚数×80ダメージ。"}}, {"name": {"ja": "ビッグバイト"}, "damage": 260, "cost": ["Metal", "Metal", "Colorless"], "effect": {"ja": "相手のバトルポケモンにダメカンがのっているなら、このワザのダメージは「30」になる。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [303],

	suffix: "EX",

	thirdParty: {
		cardmarket: 840375,
		tcgplayer: 647189,
	},
};

export default card;