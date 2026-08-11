import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ラフレシア",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "ボンッという 音がして つぼみが 開くと アレルギーを 起こす 毒花粉を ばら撒きはじめる。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "かふんばくだん"}, "damage": 30, "cost": ["Grass"], "effect": {"ja": "相手のバトルポケモンをどくとねむりにする。"}}, {"name": {"ja": "はつらつフラワー"}, "damage": "60+", "cost": ["Grass"], "effect": {"ja": "この番に、このポケモンのHPを回復していたなら、120ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ラフレシアGX",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [45],

	thirdParty: {
		cardmarket: 850510,
		tcgplayer: 655782,
	},
};

export default card;