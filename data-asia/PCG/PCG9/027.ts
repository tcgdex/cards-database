import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "マンティン（デルタ種）",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [226],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "パワー循環",
			},
			effect: {
				ja: "ターン中（攻撃の前）になったら、廃棄パイルを基本的なエネルギーカードで検索し、相手に見せて、デッキの上に置くことができます。もしそうなら、マンティンに1つのダメージカウンターを入れます。マンチンが特別な状態の影響を受けている場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "スパイラルドレイン",
			},
			effect: {
				ja: "マンティンから1つのダメージカウンターを取り外します。",
			},
			damage: 10,
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
