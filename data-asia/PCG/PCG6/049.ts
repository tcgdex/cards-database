import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "エスペオン（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [196],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "デルタヒール",
			},
			effect: {
				ja: "ターン中（攻撃の前）になったら、カードにÅ¥を持っているPokã©Monから1つのダメージカウンターを削除できます。ターンごとに1つ以上のDelta HealPokã©-Powerを使用することはできません。 Espeonが特別な状態の影響を受けた場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Metal"],
			name: {
				ja: "PsyShock",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
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
