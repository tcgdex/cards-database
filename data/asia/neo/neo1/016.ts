import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "ジャンプラフ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [189],
	hp: 70,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "スリープパウダー",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
		{
			cost: ["Grass"],
			name: {
				ja: "リーチシード",
			},
			effect: {
				ja: "この攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、ジャンプラフから1つのダメージカウンターを削除します。",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
