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
		ja: "人懐っこい ドラゴンポケモン。 大好きな トレーナーに 抱き着いて 粘液で ヌルヌルにしてしまう。",
	},

	stage: "Stage2",
	abilities: [{"type": "Ability", "name": { "ja": "ぬめぬめスリップ" }, "effect": { "ja": "このポケモンがいるかぎり、相手のバトルポケモンがにげるとき、相手はコインを1回投げる。ウラなら、にげるためのエネルギーはトラッシュせず、入れ替えをしない。この特性の効果は重ならない。" }}],

	attacks: [
		{ "name": { "ja": "りゅうのはどう" }, "damage": "160", "cost": ["Water", "Psychic"], "effect": { "ja": "自分の山札を上から1枚トラッシュする。" } }
	],

	
	weaknesses: [],
	
	resistances: [],
	
	retreat: 3,

	variants: [{"type": "normal"}],
	rarity: "Uncommon",
	dexId: [706],
	regulationMark: "I",
};

export default card;
