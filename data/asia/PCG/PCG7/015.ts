import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レイカザ（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [384.1],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ハイドロバリア",
			},
			effect: {
				'ja-jp': "RayquazaにHolon Energy Cardsが付いている限り、それぞれのWaterPokã©Monには弱点はありません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "デルタ検索",
			},
			effect: {
				'ja-jp': "デッキを検索してホロンエネルギーカードを探して、レイカザに添付してください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Water", "Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "オゾンフレア",
			},
			damage: 60,
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
