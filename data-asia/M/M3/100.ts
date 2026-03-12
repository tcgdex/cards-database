import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャースex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "おくのてキャッチ"}, "effect": {"ja": "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。この番、名前に「おくのて」とつく特性を使っていたなら、この特性は使えない。"}}],

	attacks: [{"name": {"ja": "しっぽをまく"}, "damage": 60, "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンと、ついているすべてのカードを、手札にもどす。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [52],

	suffix: "EX",

	thirdParty: {
		cardmarket: 868110,
		tcgplayer: 674419,
	},
};

export default card;