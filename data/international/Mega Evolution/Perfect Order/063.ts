import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [143],

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'es-mx': "Snorlax",
		'de-de': "Relaxo",
		'it-it': "Snorlax",
		'pt-br': "Snorlax"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gormandizer",
			'fr-fr': "Vorace",
			'es-es': "Glotón",
			'es-mx': "Comilona",
			'de-de': "Schlemmermaul",
			'it-it': "Ghiottone",
			'pt-br': "Glutão"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. Search your deck for an amount of Basic Energy up to the number of heads and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cherchez dans votre deck une quantité d'Énergies de base inférieure ou égale au nombre de côtés face obtenus, puis attachez celles-ci à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Busca en tu baraja una cantidad de Energías Básicas igual o inferior al número de caras que hayan salido y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Busca en tu mazo una cantidad de Energías Básicas igual o inferior al número de caras que salieron y únelas a este Pokémon. Después, baraja tu mazo.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Durchsuche dein Deck nach bis zu so vielen Basis-Energien, wie du Kopf geworfen hast, und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Lancia una moneta finché non esce croce. Cerca nel tuo mazzo un numero di Energie base uguale o inferiore al numero di volte in cui è uscito testa e assegnale a questo Pokémon. Poi rimischia il tuo mazzo.",
			'pt-br': "Jogue uma moeda até sair coroa. Procure por uma quantidade de Energia Básica no seu baralho até o número de caras e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Collapse",
			'fr-fr': "Effondrement",
			'es-es': "Colapso",
			'es-mx': "Colapso",
			'de-de': "Kollaps",
			'it-it': "Collassare",
			'pt-br': "Colapso"
		},

		effect: {
			'en-us': "This Pokémon is now Asleep.",
			'fr-fr': "Ce Pokémon est maintenant Endormi.",
			'es-es': "Este Pokémon pasa a estar Dormido.",
			'es-mx': "Este Pokémon ahora está Dormido.",
			'de-de': "Dieses Pokémon schläft jetzt.",
			'it-it': "Questo Pokémon viene addormentato.",
			'pt-br': "Este Pokémon agora está Adormecido."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684440,
				cardmarket: 877479
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684440,
				cardmarket: 877479
			}
		}
	],

}

export default card
