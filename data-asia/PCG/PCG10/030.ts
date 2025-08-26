import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ピチュ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [172],
	hp: 50,
	types: ["Lightning"],
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
			cost: ["Lightning"],
			name: {
				ja: "助けを求めて泣きます",
			},
			effect: {
				ja: "デッキを検索して、稲妻ポケモン（ポケモンエクスを除く）を検索し、対戦相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
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
