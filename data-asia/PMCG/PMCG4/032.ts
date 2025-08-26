import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "slowpoke",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "午後の昼寝",
			},
			effect: {
				ja: "デッキをサイキックエネルギーカードに検索し、slowpokeに添付してください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 10,
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
