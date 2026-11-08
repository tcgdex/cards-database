import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'es-mx': "Centiskorch",
		'de-de': "Infernopod",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [851],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Sizzlipede"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Controlled Burn",
			'fr-fr': "Feu Contrôlé",
			'es-es': "Fuego Controlado",
			'es-mx': "Quema Controlada",
			'de-de': "Brandrodung",
			'it-it': "Incendio Preventivo",
			'pt-br': "Fogo Controlado"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "Discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'es-mx': "Descarta las primeras 2 cartas del mazo de tu rival.",
			'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente."
		}
	}, {
		name: {
			'en-us': "Heat Tackle",
			'fr-fr': "Charge Énergétique",
			'es-es': "Placaje Ardiente",
			'es-mx': "Tacleada Ígnea",
			'de-de': "Hitze-Tackle",
			'it-it': "Calorazione",
			'pt-br': "Golpe de Colisão Aquecido"
		},

		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		damage: 160,

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895798,
				tcgplayer: 704767
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895798,
				tcgplayer: 704767
			}
		},
	],
}

export default card
