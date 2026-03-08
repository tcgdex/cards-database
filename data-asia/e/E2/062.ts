import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "togetic -062/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [176],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "奇跡のシフト",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em> </em>、1枚のポクモンに取り付けられた基本的なエネルギーカードを捨てます。次に、廃棄パイルから基本的なエネルギーカードを選択し、そのPokmonに取り付けます。 ToGeticが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ミニメトロノーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御するポケモンの攻撃の1つを選択します。ミニメトロノームは、エネルギーコストを除いて攻撃するコピーをコピーします。 （その攻撃を使用するために必要な他のことをまだしなければなりません。）（防御ポケモンがどんなタイプであっても、Togeticはまだ無色です）。  togeticはその攻撃を実行します。",
			},
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
