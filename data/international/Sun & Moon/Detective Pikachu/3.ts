import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Morelull",
		'fr-fr': "Spododo",
		'es-es': "Morelull",
		'it-it': "Morelull",
		'pt-br': "Morelull",
		'de-de': "Bubungus"
	},

	illustrator: "MPC Film",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		755,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Spore",
				'fr-fr': "Spore Dodo",
				'es-es': "Espora Soporífera",
				'it-it': "Sonnospore",
				'pt-br': "Esporo Sonífero",
				'de-de': "Schlafspore"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It scatters its shining spores around itself. Even though they're dangerous, nighttime tours of forests where Morelull live are popular.",
	},

	thirdParty: {
		cardmarket: 370768,
		tcgplayer: 186004
	}
}

export default card
