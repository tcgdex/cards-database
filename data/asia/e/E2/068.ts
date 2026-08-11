import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Umbreon -068/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [197],
	hp: 80,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "ダークムーン",
			},
			effect: {
				ja: "Umbreonがあなたのアクティブなポクモンであり、それに闇のエネルギーが付いている限り、ターン<em>の間に（攻撃の前に）</em> </em>になると、相手の手を見ることができます。それから、Umbreonに取り付けられた暗闇のエネルギーの数まで多くのカードを選択し、それらを相手のデッキにシャッフルします。その後、相手は自分のデッキから同じ数のカードを描きます。 Umbreonが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "シャドウバインド",
			},
			effect: {
				ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
