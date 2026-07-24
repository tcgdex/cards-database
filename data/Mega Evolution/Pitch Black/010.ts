import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		'es-mx': "Centiskorch",
		de: "Infernopod",
		it: "Centiskorch",
		pt: "Centiskorch"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [851],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Controlled Burn",
			fr: "Feu Contrôlé",
			es: "Fuego Controlado",
			'es-mx': "Quema Controlada",
			de: "Brandrodung",
			it: "Incendio Preventivo",
			pt: "Fogo Controlado"
		},

		cost: ["Fire"],

		effect: {
			en: "Discard the top 2 cards of your opponent's deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'es-mx': "Descarta las primeras 2 cartas del mazo de tu rival.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Descarte as 2 cartas de cima do baralho do seu oponente."
		}
	}, {
		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
			es: "Placaje Ardiente",
			'es-mx': "Tacleada Ígnea",
			de: "Hitze-Tackle",
			it: "Calorazione",
			pt: "Golpe de Colisão Aquecido"
		},

		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
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
