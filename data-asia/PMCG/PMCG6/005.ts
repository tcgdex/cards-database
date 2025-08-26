import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのズバット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "グループ攻撃",
			},
			effect: {
				ja: "あなたがプレイしているコガのズバットの数の10回のダメージを与えます。ダメージを与える前に、KogaのZubatという名前の任意の数の基本的なポケモンをデッキで検索し、ベンチに置くことができます。 （ベンチにスペースがあるよりも、この攻撃で多くのカードを取得することはできません。）もしそうなら、その後デッキをシャッフルします。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
