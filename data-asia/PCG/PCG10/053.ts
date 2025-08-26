import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "プーチエナ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [261],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				ja: "ダブルキック",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
