import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Akira Komayama",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Charge-Up Dash",
			fr: "Ruée Chargée",
			de: "Ladespurt",
			es: "Recarga Veloz",
			it: "Caricascatto",
			'es-mx': "Recarga Veloz"
		},

		effect: {
			en: "Flip a coin until you get tails. Search your deck for an amount of Basic <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> Energy up to the number of heads and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cherchez dans votre deck une quantité d'Énergies <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> de base inférieure ou égale au nombre de côtés face obtenus, puis attachez celles-ci à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Durchsuche dein Deck nach bis zu so vielen Basis-<span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>-Energien, wie du Kopf geworfen hast, und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Lanza 1 moneda hasta que salga cruz. Busca en tu baraja una cantidad de Energías <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> Básicas igual o inferior al número de caras que hayan salido y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Lancia una moneta finché non esce croce. Cerca nel tuo mazzo un numero di Energie base <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> uguale o inferiore al numero di volte in cui è uscito testa e assegnale a questo Pokémon. Poi rimischia il tuo mazzo.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Busca en tu mazo una cantidad de Energías <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> Básicas igual o inferior al número de caras que salieron y únelas a este Pokémon. Después, baraja tu mazo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Pika Bolt",
			fr: "Pik'Éclair",
			de: "Pikaschuss",
			es: "Rayo Pika",
			it: "Pikafulmine",
			'es-mx': "Pikarrayo"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907649,
				tcgplayer: 712946
			}
		}
	],
}

export default card
