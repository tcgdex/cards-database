import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タイログ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [236],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "赤ちゃんの進化",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、Hitmonlee、Hitmonchan、またはHitmontopを手からティログに置き（これは進化するタイログとしてカウントされます）、Tyrogueからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "必死のパンチ",
			},
			effect: {
				'ja-jp': "10回ダメージを与えます。",
			},
		},
	],

	retreat: 1,

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
