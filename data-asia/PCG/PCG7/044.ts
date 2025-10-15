import { Card } from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		ja: "ピチュ（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [172],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "赤ちゃんの進化",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、ピカチュウをピチュに手から置いて（これは進化するピチュとしてカウントされます）、ピチュからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ペースト",
			},
			effect: {
				ja: "廃棄の山を検索して、エネルギーカードを使用して、デルタがあるポケモン1枚に添付します。",
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
