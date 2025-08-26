import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Poliwrath -077/128",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [62],
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "プランジ",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、Poliwrathがベンチにいる場合、コインをひっくり返すことができます。頭の場合は、アクティブなポクモンに取り付けられたすべてのエネルギーカードを持っていて、PoliWrathに取り付けます。次に、アクティブなポクモンでpoliwrathを切り替えます。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "ウォーターパンチ",
			},
			effect: {
				ja: "Poliwrathに付着した水エネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、40のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
