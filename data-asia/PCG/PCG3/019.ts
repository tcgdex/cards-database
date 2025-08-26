import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "マグビー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [240],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "赤ちゃんの進化",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、マグマーをマグビーに乗せ（これは進化するマグビーとしてカウントされます）、Magbyからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "迂回",
			},
			effect: {
				ja: "プレイ中のサポーターカードがある場合は、この攻撃の効果としてそのカードの効果を使用してください。",
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
