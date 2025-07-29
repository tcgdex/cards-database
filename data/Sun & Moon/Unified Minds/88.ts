import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Munna",
		fr: "Munna",
		es: "Munna",
		it: "Munna",
		pt: "Munna",
		de: "Somniam"
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
				en: "Future Sight",
				fr: "Prescience",
				es: "Premonición",
				it: "Divinazione",
				pt: "Visão do Futuro",
				de: "Seher"
			},
			effect: {
				en: "Look at the top 4 cards of either player’s deck and put them back in any order.",
				fr: "Regardez les 4 cartes du dessus du deck de l’un des joueurs et replacez-les dans l’ordre de votre choix.",
				es: "Mira las 4 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
				it: "Guarda le prime quattro carte del mazzo di uno dei giocatori e rimettile a posto nell’ordine che preferisci.",
				pt: "Olhe as 4 primeiras cartas do baralho de um dos jogadores e coloque-as de volta em qualquer ordem.",
				de: "Schau dir die obersten 4 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
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

	thirdParty: {
		cardmarket: 388247
	}
}

export default card
