import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "mewtwo",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "催眠",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "サイキック",
			},
			effect: {
				ja: "この攻撃は、ディフェンディングポケモンに取り付けられた各エネルギーカードに対して20のダメージと10のダメージをさらに10ダメージします。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
