import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "染色",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [157],
	hp: 110,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "燃えているオーラ",
			},
			effect: {
				'ja-jp': "Typhlosionがアクティブなポカモンである限り、ターンの合間にアクティブなPokã©Mon（あなたと相手の両方）に1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "フリッカリングフレーム",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "怒り",
			},
			effect: {
				'ja-jp': "50のダメージに加えて、Typhlosionの各ダメージカウンターでさらに10ダメージを与えます。",
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
