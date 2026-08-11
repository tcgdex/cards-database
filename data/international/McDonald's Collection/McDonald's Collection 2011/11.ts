import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [519],

	description: {
		'en-us': "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Growl",
			'fr-fr': "Rugissement"
		},

		effect: {
			'en-us': "During your opponent’s next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
			'fr-fr': "Lors du prochain tour de votre adversaire, les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance)."
		}
	}, {
		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade"
		},

		damage: 10
	}],

	name: {
		'en-us': "Pidove",
		'fr-fr': "Poichigeon"
	},

	rarity: "None",
	hp: 40,
	types: ["Colorless"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281800,
				tcgplayer: 88055
			}
		}
	]
}

export default card

