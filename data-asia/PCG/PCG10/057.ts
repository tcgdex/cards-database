import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "カルバンハ",
	},


	category: "Pokemon",
	dexId: [318],
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "粗い肌",
			},
			effect: {
				ja: "Carvanhaがあなたのアクティブなポカモンであり、対戦相手の攻撃によって損傷を受けている場合（カルバンハがノックアウトされたとしても）、攻撃のポカンに1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "gnaw",
			},
			damage: 20,
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
