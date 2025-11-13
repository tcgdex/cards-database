import { Card } from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "同上",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [132],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "プリズムボディ",
			},
			effect: {
				ja: "Dittoに添付された各基本エネルギーカードは、あらゆる種類のエネルギーを提供しますが、一度に1つのエネルギーしか提供しません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "コピー",
			},
			effect: {
				ja: "防御ポケモンの攻撃の1つを選択します。その攻撃をコピーします。この攻撃は、その攻撃を使用するのに必要なエネルギーがない場合、何もしません。 （その攻撃を使用するために必要な他のことをまだしなければなりません。）",
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
