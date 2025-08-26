import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "pidgeot",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [18],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "翼を鼓動します",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、PidgeotがアクティブなPokmonである場合、ベンチで1枚のPokmonとすべてのカードをデッキに接続します。 Pidgeotが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "シャープなくちばし",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
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
