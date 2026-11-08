import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},

		damage: 10
	}, {
		name: {
			'en-us': "Lunge",
			'fr-fr': "Coup Rapide"
		},

		damage: 30,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118839
	}
}

export default card