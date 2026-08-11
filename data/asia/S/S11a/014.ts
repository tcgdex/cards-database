import { Card } from "models/database/card";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エンテイ",
		'zh-tw': "炎帝",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "エンテイが ほえると 世界の どこかの 火山が 噴火すると 言われている。",
		'zh-tw': "據說如果炎帝吼叫的話，世界上的某處火山就會爆發。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ばくねつダッシュ",
				'zh-tw': "爆熱衝刺",
			},
			effect: {
				'ja-jp': "このポケモンに[R]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
				'zh-tw': "若這隻寶可夢身上附有【火】能量，則這隻寶可夢【撤退】所需的能量全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ツメできりさく",
				'zh-tw': "利爪劈擊",
			},
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673011,
				tcgplayer: 570777,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [244],
};

export default card;
