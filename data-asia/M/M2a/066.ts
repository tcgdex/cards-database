import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲキッス",
	},

	illustrator: "Narano",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "争い事や もめ事が 起こる 場所には 姿を 見せない。 近ごろは ほとんど 見かけない。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "ワンダーキッス"}, "effect": {"ja": "このポケモンがいるかぎり、相手のバトルポケモンがきぜつするたび、自分はコインを1回投げる。オモテなら、サイドを1枚多くとる。この効果は、この特性を持つポケモンが何匹いても、重ならない。"}}],

	attacks: [{"name": {"ja": "スピードウイング"}, "cost": ["Colorless", "Colorless", "Colorless"], "damage": 140}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "トゲチック",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [468],
};

export default card;
