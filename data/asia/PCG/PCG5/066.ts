import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Flygon Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [330],
	hp: 150,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "充電充電",
			},
			effect: {
				'ja-jp': "ターン中に、手からフライゴンEXをプレイしてPokã©Monの1つを進化させると、Discard Pileを最大2枚のエネルギーカードで検索し、Flygon Exに取り付けることができます。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "反応性の爆発",
			},
			effect: {
				'ja-jp': "Flygon Exに接続された任意の数のReact Energyカードを廃棄することができます。もしそうなら、この攻撃は40ダメージに加えて、廃棄したReactエネルギーカードごとに30ダメージを与えます。",
			},
		},
		{
			cost: ["Grass", "Lightning", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ドラゴンクロー",
			},
			damage: 100,
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
