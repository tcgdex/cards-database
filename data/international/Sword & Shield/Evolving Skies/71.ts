import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
		'es-es': "Flabébé",
		'it-it': "Flabébé",
		'pt-br': "Flabébé",
		'de-de': "Flabébé"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "OKACHEKE",

	attacks: [{
		name: {
			'en-us': "Hypnotic Gaze",
			'fr-fr': "Regard Hypnotique",
			'es-es': "Mirada Hipnótica",
			'it-it': "Ipnosguardo",
			'pt-br': "Hypnotic Gaze",
			'de-de': "Hypnotischer Blick"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "Your opponent's Active Pokémon is now Asleep.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "Flabébé wears a crown made from pollen it's collected from its flower. The crown has hidden healing properties."
	},

	dexId: [669],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574119,
				tcgplayer: 246849
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574119,
				tcgplayer: 246849
			}
		},
	],
}

export default card
