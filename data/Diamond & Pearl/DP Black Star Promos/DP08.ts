import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Shieldon",
		fr: "Dinoclier"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		410,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Armor Fossil",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Hard Face",
				fr: "Visage dur"
			},
			effect: {
				en: "During your opponents next turn, any damage done to Shieldon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Dinoclier par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shield Attack",
				fr: "Attaque de bouclier"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		fr: "Un Pokémon qui vivait dans la jungle il y a 100 millions d'années. Son visage est très dur."
	}
}

export default card
