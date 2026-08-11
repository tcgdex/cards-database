import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Delphox EX",
		'fr-fr': "Goupelin EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		655,
	],

	hp: 170,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wonder Flare",
				'fr-fr': "Flamme Miracle",
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand. This attack does 40 more damage for each Energy card in your opponent's hand.",
				'fr-fr': "Votre adversaire montre sa main. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Énergie dans la main de votre adversaire.",
			},
			damage: "80＋",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281312
	}
}

export default card
