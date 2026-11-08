import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Munna",
		'fr-fr': "Munna",
		'es-es': "Munna",
		'it-it': "Munna",
		'pt-br': "Munna",
		'de-de': "Somniam"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		517,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Future Sight",
				'fr-fr': "Prescience",
				'es-es': "Premonición",
				'it-it': "Divinazione",
				'pt-br': "Visão do Futuro",
				'de-de': "Seher"
			},
			effect: {
				'en-us': "Look at the top 4 cards of either player’s deck and put them back in any order.",
				'fr-fr': "Regardez les 4 cartes du dessus du deck de l’un des joueurs et replacez-les dans l’ordre de votre choix.",
				'es-es': "Mira las 4 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
				'it-it': "Guarda le prime quattro carte del mazzo di uno dei giocatori e rimettile a posto nell’ordine che preferisci.",
				'pt-br': "Olhe as 4 primeiras cartas do baralho de um dos jogadores e coloque-as de volta em qualquer ordem.",
				'de-de': "Schau dir die obersten 4 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon appears before people and Pokémon who are having nightmares and eats those dreams.",
	},

	thirdParty: {
		cardmarket: 388247,
		tcgplayer: 195020
	}
}

export default card
