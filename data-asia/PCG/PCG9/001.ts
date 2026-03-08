import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "Snorlax（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [143],
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ベッドヘッド",
			},
			effect: {
				ja: "Snorlaxがターンの合間に眠っている限り、防御するPokã©Monの1つに2つのダメージカウンターを入れます。ターン中（攻撃の前に）、SnorlaxがアクティブなPokã©Monである場合、Snorlaxから2つのダメージカウンターを削除し、Snorlaxが眠っています。 Snorlaxが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [],

	retreat: 3,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
