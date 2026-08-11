import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "エンテイ",
		'zh-tw': "炎帝",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "エンテイが ほえると 世界の どこかの 火山が 噴火すると 言われている。",
		'zh-tw': "據說如果炎帝吼叫的話，世界上的某處火山就會爆發。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ばくねつダッシュ",
				'zh-tw': "爆熱衝刺",
			},
			effect: {
				ja: "このポケモンに[R]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
				'zh-tw': "若這隻寶可夢身上附有【火】能量，則這隻寶可夢【撤退】所需的能量全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ツメできりさく",
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
