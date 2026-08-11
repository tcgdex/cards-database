import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラティオス（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [381],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デュアルオーラ",
			},
			effect: {
				'ja-jp': "LatiasまたはLatias Exがプレイしている限り、各プレイヤーの進化したPokã©Mon（Pokã©Mon-Exを除く）はPokã©-Bodiesを使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ダイビング",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "アクアブラスト",
			},
			effect: {
				'ja-jp': "ラティオスに取り付けられた水エネルギーを捨てます。",
			},
			damage: 50,
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
