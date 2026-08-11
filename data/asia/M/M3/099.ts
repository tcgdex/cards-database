import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "メガエアームドex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ソニックリッパー"}, "cost": ["Metal", "Metal", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーをすべて山札にもどして切り、相手のポケモン1匹に、220ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [227],

	suffix: "EX",

	thirdParty: {
		cardmarket: 868109,
		tcgplayer: 674418,
	},
};

export default card;