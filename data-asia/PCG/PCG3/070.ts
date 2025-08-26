import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークタイラナター",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 120,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "粉砕",
			},
			effect: {
				ja: "ダークティラニターに付着した各エネルギーに対して、10ダメージに加えて10ダメージを与えます。",
			},
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				ja: "尾を回します",
			},
			effect: {
				ja: "相手の各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Darkness", "Darkness", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "噛む",
			},
			effect: {
				ja: "防御ポケモンがポケモン-Exの場合、この攻撃は70のダメージと50のダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
