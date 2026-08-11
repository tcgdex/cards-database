import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [600],

	description: {
		'en-us': "Spinning minigears are rotated at high speed and repeatedly fired away. It is dangerous if the gears don’t return."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Metal Sound",
			'fr-fr': "Strido-Son"
		},

		effect: {
			'en-us': "The Defending Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Défenseur est maintenant Confus."
		}
	}, {
		name: {
			'en-us': "Guard Press",
			'fr-fr': "Pression de Garde"
		},

		damage: 60,

		effect: {
			'en-us': "During your opponent’s next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
		}
	}],

	name: {
		'en-us': "Klang",
		'fr-fr': "Clic"
	},

	rarity: "None",
	hp: 80,
	types: ["Metal"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281788,
				tcgplayer: 86478
			}
		}
	]
}

export default card

