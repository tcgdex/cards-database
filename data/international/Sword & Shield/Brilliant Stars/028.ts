import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [99],
	set: Set,

	name: {
		'en-us': "Kingler V",
		'fr-fr': "Krabboss V",
		'es-es': "Kingler V",
		'it-it': "Kingler V",
		'pt-br': "Kingler V",
		'de-de': "Kingler V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Falling Bubbles",
			'fr-fr': "Chute de Bulles",
			'es-es': "Lluvia de Burbujas",
			'it-it': "Bolle Cadenti",
			'pt-br': "Desabar de Bolhas",
			'de-de': "Wie die Tropfen fallen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, search your deck for up to 5 Water Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck jusqu'à 5 cartes Énergie Water, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 5 cartas de Energía Water y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a cinque carte Energia Water e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Jogue 1 moeda. Se sair cara, procure por até 5 cartas de Energia Water no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach bis zu 5 Water-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Raging Pincer",
			'fr-fr': "Pince Enragée",
			'es-es': "Tenaza Furiosa",
			'it-it': "Chela Furiosa",
			'pt-br': "Pinça Indomada",
			'de-de': "Tobende Kneifer"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608478,
				tcgplayer: 263727
			}
		},
	],
}

export default card
