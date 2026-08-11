import { Card } from "models/database/card";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マニューラ",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'ja-jp': "進化して さらに ずる賢くなり ツメで 石に サインをつけて コミュニケーションを はかっている。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "むくいのツメ"}, "damage": "20+", "cost": ["Darkness", "Darkness"], "effect": {"ja": "このポケモンの残りHPが「50」以下なら、170ダメージ追加。"}}, {"name": {"ja": "いあいぎり"}, "damage": 60, "cost": ["Darkness", "Darkness"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		'ja-jp': "ニューラ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [461],

	thirdParty: {
		cardmarket: 850556,
		tcgplayer: 655828,
	},
};

export default card;