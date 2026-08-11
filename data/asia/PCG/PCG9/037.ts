import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Flygon Ex（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [330],
	hp: 150,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "砂の損傷",
			},
			effect: {
				'ja-jp': "Flygon Exがアクティブなポカモンである限り、ターンの間に対戦相手のベンチに入った基本的なポケモンに1つのダメージカウンターを置きます。 1つ以上の砂ダメージを使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				'ja-jp': "サイキックパルス",
			},
			effect: {
				'ja-jp': "ダメージがカウンターを伴う相手のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 80,
		},
	],

	retreat: 2,

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
