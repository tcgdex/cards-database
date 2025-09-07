import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "マイムさん",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [122],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "エネルギー障壁",
			},
			effect: {
				ja: "Mime氏が攻撃によって損傷を受けた場合、Mime氏に取り付けられた基本エネルギーカードごとにそのダメージを10倍に減らします。エネルギー障壁によって減少する可能性のある損傷の最大量は20です。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "マインドショック",
			},
			effect: {
				ja: "衰弱と抵抗を適用しないでください。",
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
