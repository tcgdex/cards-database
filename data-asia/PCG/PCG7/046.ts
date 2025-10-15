import { Card } from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		ja: "キメコ（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [358],
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "デルタサポート",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、ホロンがその名前に載っているサポーターカードを持っている場合は、基本的なエネルギーカードまたはデルタレインボーエネルギーカードを廃棄パイルを検索し、対戦相手に見せて、手に渡すことができます。キメコーが特別な状態の影響を受ける場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "フック",
			},
			damage: 20,
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
