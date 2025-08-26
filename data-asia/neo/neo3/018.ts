import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "ジンクス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [124],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "おやすみなさいキスのフリーズキス",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "奇妙なダンス",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与え、防御ポケモンが混乱しています。尾の場合、この攻撃は20ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
