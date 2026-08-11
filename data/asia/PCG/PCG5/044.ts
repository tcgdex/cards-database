import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Girafarig",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [203],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "リアセンサー",
			},
			effect: {
				ja: "各プレイヤーのアクティブな基本的なPokã©Mon（Pokã©Mon-Exを除く）は、Pokã©Powersを使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "先見性",
			},
			effect: {
				ja: "どちらのプレイヤーのデッキの上位5枚のカードを見て、好きな順序でそのプレイヤーのデッキの上に戻します。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "障害",
			},
			effect: {
				ja: "防衛ポケモンに特別なエネルギーカードが付いている場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
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
