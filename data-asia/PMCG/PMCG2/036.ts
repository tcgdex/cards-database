import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "meowth",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "給料日",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、カードを描きます。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
