import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'es-es': "Exeggutor",
		'it-it': "Exeggutor",
		'pt-br': "Exeggutor",
		'de-de': "Kokowei"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mind Bend",
				'fr-fr': "Contrôleur d’Esprit",
				'es-es': "Fusión Mental",
				'it-it': "Fusione Mentale",
				'pt-br': "Dobra Mentes",
				'de-de': "Gedankenverbiegung"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Full Clean",
				'fr-fr': "Nettoyage Complet",
				'es-es': "Limpieza Total",
				'it-it': "Grandi Pulizie",
				'pt-br': "Limpeza Completa",
				'de-de': "Frühjahrsputz"
			},
			effect: {
				'en-us': "Discard your hand.",
				'fr-fr': "Défaussez votre main.",
				'es-es': "Descarta las cartas de tu mano.",
				'it-it': "Scarta le carte che hai in mano.",
				'pt-br': "Descarte a sua mão.",
				'de-de': "Lege deine Handkarten auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It engages its enemies using psychic powers. Each of its three heads fires off psychokinetic energy, tripling its power.",
	},

	thirdParty: {
		cardmarket: 388182,
		tcgplayer: 195002
	}
}

export default card
