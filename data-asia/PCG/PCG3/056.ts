import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "togepi",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [175],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "あくび",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ミニメトロノーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御するポケモンの攻撃の1つを選択します。ミニメトロノームは、エネルギーコストを除いて攻撃するコピーをコピーします。 （あなたはまだその攻撃に必要な他のことをしなければなりません。）（ポケモンがどんなタイプであっても、Togepiのタイプはまだ無色です。）Togepiはその攻撃を実行します。",
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
