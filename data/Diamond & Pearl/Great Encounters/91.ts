import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Unown L",
		fr: "Zarbi L",
		de: "Icognito L"
	},
	illustrator: "Daisuke Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "LINK",
				fr: "LIEN",
				de: "LINK"
			},
			effect: {
				en: "Unown L can use any attack from any Unown in play (both yours and your opponent's). (You still have to pay for that attack's Energy cost.)",
				fr: "Zarbi L peut utiliser n'importe quelle attaque des Zarbis en jeu (les vôtres et ceux de votre adversaire). (Vous devez toujours payer le Coût en Énergie de cette attaque.)",
				de: "Icognito L kann alle Angriffe von allen Icognito im Spiel (deinen und denen deines Gegners) einsetzen. (Du musst die Energiekosten für diesen Angriff trotzdem bezahlen.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "Search either player's discard pile for up to any 2 cards, show them to your opponent, and put them on top of that player's deck in any order you like.",
				fr: "Choisissez jusqu'à 2 cartes dans la pile de défausse d'1 des joueurs, montrez-les à votre adversaire et placez-les au dessus du deck de ce joueur dans n'importe quel ordre.",
				de: "Durchsuche den Ablagestapel eines Spielers nach bis zu 2 Karten, zeige sie deinem Gegner und lege sie in beliebiger Reihenfolge auf das Deck dieses Spielers."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
