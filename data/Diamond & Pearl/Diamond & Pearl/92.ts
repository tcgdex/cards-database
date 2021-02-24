import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		95,
	],
	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Tunneling",
				fr: "Creuser un tunnel",
			},
			effect: {
				en: "Choose up to 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Onix can't attack during your next turn.",
				fr: "Choisissez jusqu'à 2 des Pokémon de Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance au Pokémon de Banc). Onix ne peut pas attaquer lors de votre prochain tour.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
