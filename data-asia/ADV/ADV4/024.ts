import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Feebas",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [349],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Water"],
			name: {
				ja: "上昇",
			},
			effect: {
				ja: "Feebasから進化するカードをデッキで検索し、Feebasに置いてください。 （これは進化するFeebasとしてカウントされます。）その後、デッキをシャッフルします。",
			},
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
