import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "altaria ex（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [334],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "余分なブースト",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前）に一度、手からステージ2のPokã©Mon-Exの1つに基本的なエネルギーカードを添付することができます。 Altaria Exが特別な状態の影響を受ける場合、この電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "癒しの光",
			},
			effect: {
				'ja-jp': "各ポケモンから1つのダメージカウンターを取り外します。",
			},
			damage: 60,
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
