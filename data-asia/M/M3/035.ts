import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "フレフワン",
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "においが 強すぎるため よほど 好きな トレーナーでなければ 連れて 歩くのは キツイのだ。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "かおりあつめ"}, "effect": {"ja": "自分の番に1回使える。自分の山札から「基本エネルギー」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "ドレインキッス"}, "damage": 50, "cost": ["Psychic", "Colorless"], "effect": {"ja": "このポケモンのHPを「30」回復する。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "シュシュプ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [683],

	thirdParty: {
		cardmarket: 867957,
		tcgplayer: 674354,
	},
};

export default card;