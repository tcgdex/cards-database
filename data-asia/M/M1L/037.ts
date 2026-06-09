import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "シザリガー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "好戦的な ポケモンで 自分の 縄張りから あらゆる ポケモンを ハサミで つまんで 投げ飛ばすぞ！",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "はさむ"}, "damage": 30, "cost": ["Colorless"]}, {"name": {"ja": "やりかえしシザー"}, "damage": 130, "cost": ["Darkness", "Darkness", "Colorless"], "effect": {"ja": "このワザは、このポケモンにダメカンがのっているなら、エネルギー1個で使える。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヘイガニ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [342],

	thirdParty: {
		cardmarket: 840332,
		tcgplayer: 647146,
	},
};

export default card;