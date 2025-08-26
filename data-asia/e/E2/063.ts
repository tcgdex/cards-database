import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Porygon2",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [233],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "バックアップ",
			},
			effect: {
				ja: "それぞれのターンの間に（攻撃の前に）</em> </em>、手に2枚以下のカードがある場合は、手に3枚のカードがあるまでカードからカードを描くことができます。 Porygon2が特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "催眠線",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

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
