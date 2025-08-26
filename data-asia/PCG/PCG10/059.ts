import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "サボテン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [332],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "毒物構造",
			},
			effect: {
				ja: "ターン中（攻撃の前）に1回、82がプレイ中の場合は、防御するポカンの1つを選択できます。そのポカモンは現在毒されています。このポケモンが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ピンミサイル",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
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
