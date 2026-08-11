import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [137],
	set: Set,

	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Branch Calculation",
			'fr-fr': "Calcul de Branchement",
			'es-es': "Cálculo Desestabilizador",
			'it-it': "Calcolo Diramazione",
			'pt-br': "Cálculos Meticulosos",
			'de-de': "Zweigkalkulation"
		},

		effect: {
			'en-us': "Look at the top 4 cards of either player's deck and put them back in any order.",
			'fr-fr': "Regardez les 4 cartes du dessus du deck de l'un des joueurs, puis replacez-les dans l'ordre de votre choix.",
			'es-es': "Mira las 4 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
			'it-it': "Guarda le prime quattro carte del mazzo di uno dei giocatori e rimettile a posto nell'ordine che preferisci.",
			'pt-br': "Olhe as 4 cartas de cima do baralho de qualquer um dos jogadores e coloque-as de volta em qualquer ordem.",
			'de-de': "Schau dir die obersten 4 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'es-es': "Transmisión",
			'it-it': "Raggio",
			'pt-br': "Feixe",
			'de-de': "Strahl"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674150,
				tcgplayer: 284063
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674150,
				tcgplayer: 284063
			}
		},
	],
}

export default card
