import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンドスラッシュ（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [28],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デルタストーム",
			},
			effect: {
				'ja-jp': "SandslashがアクティブなPokã©Monである限り、ターンの間に対戦相手のPokã©Mon-Exのそれぞれに1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "レンド",
			},
			effect: {
				'ja-jp': "ディフェンディングポケモンがすでにダメージカウンターを持っている場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
			},
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スラッシュ",
			},
			damage: 50,
		},
	],

	retreat: 1,

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
