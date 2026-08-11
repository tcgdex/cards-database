import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Gyarados EX",
		'fr-fr': "Léviator EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stormy Seas",
				'fr-fr': "Mers Orageuses",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, search your deck for a Water Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 289556
	}
}

export default card
