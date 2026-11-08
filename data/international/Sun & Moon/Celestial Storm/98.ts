import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'es-es': "Heatran",
		'it-it': "Heatran",
		'pt-br': "Heatran",
		'de-de': "Heatran"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 130,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Steelworks",
				'fr-fr': "Aciérie",
				'es-es': "Siderurgia",
				'it-it': "Fucina",
				'pt-br': "Siderúrgica",
				'de-de': "Stahlwerk"
			},
			effect: {
				'en-us': "Look at the top 4 cards of your deck and attach any number of Metal Energy cards you find there to 1 of your Pokémon. Shuffle the other cards back into your deck.",
				'fr-fr': "Regardez les 4 cartes du dessus de votre deck et attachez le nombre désiré de cartes Énergie Metal que vous y trouverez à l’un de vos Pokémon. Mélangez les autres cartes avec votre deck.",
				'es-es': "Mira las 4 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Metal que encuentres entre ellas a 1 de tus Pokémon. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				'it-it': "Guarda le prime quattro carte del tuo mazzo e assegna un numero qualsiasi di carte Energia Metal presenti tra quelle carte a uno dei tuoi Pokémon. Poi rimischia le altre carte nel tuo mazzo.",
				'pt-br': "Olhe as 4 primeiras cartas do seu baralho e ligue qualquer número de cartas de Energia Metal que encontrar lá a 1 dos seus Pokémon. Embaralhe as demais cartas de volta no seu baralho.",
				'de-de': "Schau dir die obersten 4 Karten deines Decks an und lege beliebig viele Metal-Energiekarten, die du dort findest, an 1 deiner Pokémon an. Mische die anderen Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steel Tackle",
				'fr-fr': "Charge d’Acier",
				'es-es': "Placaje de Acero",
				'it-it': "Ferrazione",
				'pt-br': "Colisão de Aço",
				'de-de': "Stahltackle"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves.",
	},

	thirdParty: {
		cardmarket: 361340,
		tcgplayer: 170923
	}
}

export default card
