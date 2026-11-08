import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [99],
	set: Set,

	name: {
		'en-us': "Kingler VMAX",
		'fr-fr': "Krabboss VMAX",
		'es-es': "Kingler VMAX",
		'it-it': "Kingler VMAX",
		'pt-br': "Kingler VMAX",
		'de-de': "Kingler VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Kingler V",
		'fr-fr': "Krabboss-V",
		'es-es': "Kingler V",
		'it-it': "Kingler-V",
		'pt-br': "Kingler V",
		'de-de': "Kingler-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Bubbles Galore",
			'fr-fr': "Bulles Abondantes",
			'es-es': "Burbujas a Raudales",
			'it-it': "Bolle a Volontà",
			'pt-br': "Mundaréu de Bolhas",
			'de-de': "Tropfenparty"
		},

		effect: {
			'en-us': "Search your deck for up to 5 Water Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 5 cartes Énergie Water, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 5 cartas de Energía Water y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a cinque carte Energia Water e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 5 cartas de Energia Water no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 5 Water-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "G-Max Pincer",
			'fr-fr': "Pince G-Max",
			'es-es': "Gigatenaza",
			'it-it': "Gigachela",
			'pt-br': "Pinça G-Max",
			'de-de': "Giga-Kneifer"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 240
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
				cardmarket: 608479,
				tcgplayer: 263728
			}
		},
	],
}

export default card
