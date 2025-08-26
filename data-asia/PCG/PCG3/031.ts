import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "マンティン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [226],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "波紋",
			},
			effect: {
				ja: "ターン中（攻撃の前）に一度、Pokã©Mon（マンティンを除く）の1つから1つのダメージカウンターを削除できます。マンチンが特別な状態の影響を受けている場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "アクアスラッシュ",
			},
			effect: {
				ja: "マンティンは次のターン中に攻撃することはできません。",
			},
			damage: 30,
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
