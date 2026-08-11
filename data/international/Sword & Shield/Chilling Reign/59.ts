import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [280],
	set: Set,

	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Confuse Ray",
			'fr-fr': "Onde Folie",
			'es-es': "Rayo Confuso",
			'it-it': "Stordiraggio",
			'pt-br': "Raio da Confusão",
			'de-de': "Konfusstrahl"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "If its horns capture the warm feelings of people or Pokémon, its body warms up slightly."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567167,
				tcgplayer: 241720
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567167,
				tcgplayer: 241720
			}
		},
	],
}

export default card
