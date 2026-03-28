import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメルゴン",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "ぬめぬめスリップ"}, "effect": {"ja": "このポケモンがいるかぎり、相手のバトルポケモンがにげるとき、相手はコインを1回投げる。ウラなら、にげるためのエネルギーはトラッシュせず、入れ替えをしない。この特性の効果は重ならない。"}}],

	attacks: [{"name": {"ja": "りゅうのはどう"}, "cost": ["Water", "Psychic"], "damage": 160, "effect": {"ja": "自分の山札を上から1枚トラッシュする。"}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヌメイル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [706],
};

export default card;
