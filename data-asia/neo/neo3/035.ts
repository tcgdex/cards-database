import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスレアヴァス",
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
				ja: "ナイトアイズ",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				ja: "滅びる歌",
			},
			effect: {
				ja: "防衛ポケモンが眠っていて、最後のターン中に夜目で攻撃された場合、それはノックアウトされます。",
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
