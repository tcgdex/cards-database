import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Victreebel",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [71],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ネクターポッド",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、対戦相手のベンチにあるステージ2の1つの進化したポカモンを防御するポカモンと交換することができます。対戦相手は、防御するポカモンを選択して切り替えます。 Victreebelが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "眠り毒",
			},
			effect: {
				'ja-jp': "防御するポケモンは今眠っていて毒されています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "鋭い葉",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
			},
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
