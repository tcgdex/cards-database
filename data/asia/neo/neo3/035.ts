import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミスレアヴァス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [200],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "ナイトアイズ",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				'ja-jp': "滅びる歌",
			},
			effect: {
				'ja-jp': "防衛ポケモンが眠っていて、最後のターン中に夜目で攻撃された場合、それはノックアウトされます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
