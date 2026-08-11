import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Cresselia",
		'fr-fr': "Cresselia",
		'es-es': "Cresselia",
		'it-it': "Cresselia",
		'pt-br': "Cresselia",
		'de-de': "Cresselia"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Toyste Beach",
	dexId: [488],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Crescent Glow",
			'fr-fr': "Lueur Lunule"
		},

		effect: {
			'en-us': "Search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. If you go second and it's your first turn, instead search for up to 3 Psychic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie , puis attachez-la à l'un de vos Pokémon. Si vous jouez en second et que c'est votre premier tour, cherchez jusqu'à 3 cartes Énergie  à la place, puis attachez-les à l'un de vos Pokémon. Mélangez ensuite votre deck."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Photon Laser",
			'fr-fr': "Laser à Photons"
		},

		effect: {
			'en-us': "If you have at least 5 Energy in play, this attack does 90 more damage.",
			'fr-fr': "Si vous avez au moins 5 Énergies en jeu, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "30+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "Those who sleep holding Cresselia's feather are assured of joyful dreams. It is said to represent the crescent moon.",
	},

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574286,
				tcgplayer: 246803
			}
		},
	],
}

export default card
