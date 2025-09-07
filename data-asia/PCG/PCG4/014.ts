import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "染色",
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
				ja: "燃えているオーラ",
			},
			effect: {
				ja: "Typhlosionがアクティブなポカモンである限り、ターンの合間にアクティブなPokã©Mon（あなたと相手の両方）に1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "フリッカリングフレーム",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "50のダメージに加えて、Typhlosionの各ダメージカウンターでさらに10ダメージを与えます。",
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
