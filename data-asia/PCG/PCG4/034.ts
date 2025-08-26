import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョルテオン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [135],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "電流を引き付けます",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、デッキを稲妻エネルギーカードに検索し、ポケモン1枚に取り付けます。その後、デッキをシャッフルします。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "マルチパルス",
			},
			effect: {
				ja: "Jolteonに3つ以上の異なるタイプの基本エネルギーカードが付属している場合、この攻撃は40ダメージに20ダメージを与え、防御ポケモンが混乱しています。",
			},
		},
	],


	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
