import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [355],

	name: {
		en: "Duskull",
		fr: "Skelénox",
		es: "Duskull",
		it: "Duskull",
		pt: "Duskull",
		de: "Zwirrlicht"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

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
				en: "Look at the top 4 cards of either player's deck and put them back in any order.",
				fr: "Regardez les 4 cartes du dessus du deck de l'un des joueurs, puis replacez-les dans l'ordre de votre choix.",
				es: "Mira las 4 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
				it: "Guarda le prime quattro carte del mazzo di uno dei giocatori e rimettile a posto nell'ordine che preferisci.",
				pt: "Olhe as 4 cartas de cima do baralho de qualquer um dos jogadores e coloque-as de volta em qualquer ordem.",
				de: "Schau dir die obersten 4 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If it finds bad children who won't listen to their parents, it will spirit them away—or so it's said."
	},

	thirdParty: {
		cardmarket: 511765,
		tcgplayer: 226473
	}
}

export default card
