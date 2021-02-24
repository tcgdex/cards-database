import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Palm Strike",
				fr: "Cou d'paume",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Spirited Throw",
				fr: "Lancer plein d'esprit",
			},
			effect: {
				en: "If Hariyama has fewer remaining HP than the Defending Pokémon, this attack's base damage is 80.",
				fr: "Si Hariyama possède moins de PV que le Pokémon Défenseur, les dégâts de base de cette attaque sont de 80.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 3,



}

export default card
