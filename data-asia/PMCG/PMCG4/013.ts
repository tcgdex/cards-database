import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ポニータ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [77],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "ember",
			},
			effect: {
				ja: "この攻撃を使用するために、ポニータに取り付けられた1つのファイアエネルギーカードを廃棄します。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
