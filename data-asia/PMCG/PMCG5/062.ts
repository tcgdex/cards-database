import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Surge's Eevee中t",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [133],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "驚き",
			},
			effect: {
				ja: "相手の手からランダムなカードを見てください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "傷",
			},
			damage: 20,
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
