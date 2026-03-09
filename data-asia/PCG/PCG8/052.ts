import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "ウィグリティフ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [40],
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ふわふわした毛皮",
			},
			effect: {
				ja: "Wigglytuffがあなたのアクティブなポカモンであり、相手の攻撃によって損傷を受けている場合（Wigglytuffがノックアウトされたとしても）、攻撃するPokã©Monは今眠っています。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "集める",
			},
			effect: {
				ja: "3枚のカードを描きます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ペスター",
			},
			effect: {
				ja: "防御ポケモンが特別な状態の影響を受ける場合、この攻撃は30のダメージと20のダメージを与えます。",
			},
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
