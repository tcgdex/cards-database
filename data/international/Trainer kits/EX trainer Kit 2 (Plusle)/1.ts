import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Psychic"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la famille"
		},
		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
			'fr-fr': "Choisissez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck."
		}
	}, {
		cost: [
			"Psychic",
		],
		name: {
			'en-us': "Metal Ball",
			'fr-fr': "Boule métallique"
		},
		effect: {
			'en-us': "Put 1 damage counter on the Defending Pokémon.",
			'fr-fr': "Placez 1 marqueur de dégât sur le Pokémon Défenseur."
		}
	}],

	weaknesses: [
		{
			type: "Psychic",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277193,
				tcgplayer: 83786
			}
		},
	],

}

export default card
