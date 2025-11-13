import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いラティテート",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [20],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				ja: "暗い種",
			},
			effect: {
				ja: "防御するポケモンは、相手の次のターン中に退却することはできません。対戦相手の次のターンの終わりに、防御ポケモンに5つのダメージカウンターを置きます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "毒を広げます",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。この攻撃は、相手のベンチ付きポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 10,
		},
	],


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
