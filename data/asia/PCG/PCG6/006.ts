import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "おしっこ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "体臭",
			},
			effect: {
				'ja-jp': "weezingがアクティブなポカモンである限り、ターンの間にポカンボディを持っている相手の各ポカモンに1つのダメージカウンターを1つのダメージカウンターに入れます。",
			},
		}],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "ミスト攻撃",
			},
			effect: {
				'ja-jp': "対戦相手の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スラッジ渦",
			},
			damage: 50,
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
