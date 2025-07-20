import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Flygon Ex",
	},


	category: "Pokemon",
	dexId: [330],
	hp: 150,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "サイキックプロテクター",
			},
			effect: {
				ja: "Flygon Exが対戦相手の攻撃によって破損している場合、手から最大4枚のカードを捨てることができます。もしそうなら、Flygon Exに与えられた損害は、あなたが捨てたカードごとに10削減されます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スラッシングストライク",
			},
			effect: {
				ja: "コインをひっくり返します。テールの場合、Flygon Exは次のターン中にスラッシングストライクを使用できません。",
			},
			damage: 70,
		},
	],


	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
