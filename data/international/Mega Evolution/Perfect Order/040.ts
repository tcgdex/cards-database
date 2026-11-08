import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [450],

	name: {
		'en-us': "Hippowdon",
		'fr-fr': "Hippodocus",
		'es-es': "Hippowdon",
		'es-mx': "Hippowdon",
		'de-de': "Hippoterus",
		'it-it': "Hippowdon",
		'pt-br': "Hippowdon"
	},

	evolveFrom: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'es-mx': "Hippopotas",
		'de-de': "Hippopotas",
		'it-it': "Hippopotas",
		'pt-br': "Hippopotas",
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Twister Spewing",
			'fr-fr': "Projection de Tornades",
			'es-es': "Tornado Regurgitante",
			'es-mx': "Chorro de Tornados",
			'de-de': "Wirbelspeier",
			'it-it': "Espellivortice",
			'pt-br': "Lança Tornado"
		},

		effect: {
			'en-us': "If you played Tarragon from your hand during this turn, discard the top 3 cards of your opponent's deck.",
			'fr-fr': "Si vous avez joué Taragon de votre main pendant ce tour, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			'es-es': "Si has jugado Estragón de tu mano durante este turno, descarta las 3 primeras cartas de la baraja de tu rival.",
			'es-mx': "Si jugaste Estragón de tu mano durante este turno, descarta las primeras 3 cartas del mazo de tu rival.",
			'de-de': "Wenn du Tarragon während dieses Zuges aus deiner Hand gespielt hast, lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Se hai giocato Tarragon dalla tua mano durante questo turno, scarta le prime tre carte del mazzo del tuo avversario.",
			'pt-br': "Se você jogou Tarragon da sua mão durante este turno, descarte as 3 cartas de cima do baralho do seu oponente."
		},

		damage: 80
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'es-mx': "Impacto Pesado",
			'de-de': "Schwerer Einschlag",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684426,
				cardmarket: 877454
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684426,
				cardmarket: 877454
			}
		}
	],

}

export default card
