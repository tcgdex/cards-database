import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Heatran",
		fr: "Heatran",
		es: "Heatran",
		it: "Heatran",
		pt: "Heatran",
		de: "Heatran"
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
				en: "Steelworks",
				fr: "Aciérie",
				es: "Siderurgia",
				it: "Fucina",
				pt: "Siderúrgica",
				de: "Stahlwerk"
			},
			effect: {
				en: "Look at the top 4 cards of your deck and attach any number of Metal Energy cards you find there to 1 of your Pokémon. Shuffle the other cards back into your deck.",
				fr: "Regardez les 4 cartes du dessus de votre deck et attachez le nombre désiré de cartes Énergie Metal que vous y trouverez à l’un de vos Pokémon. Mélangez les autres cartes avec votre deck.",
				es: "Mira las 4 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Metal que encuentres entre ellas a 1 de tus Pokémon. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				it: "Guarda le prime quattro carte del tuo mazzo e assegna un numero qualsiasi di carte Energia Metal presenti tra quelle carte a uno dei tuoi Pokémon. Poi rimischia le altre carte nel tuo mazzo.",
				pt: "Olhe as 4 primeiras cartas do seu baralho e ligue qualquer número de cartas de Energia Metal que encontrar lá a 1 dos seus Pokémon. Embaralhe as demais cartas de volta no seu baralho.",
				de: "Schau dir die obersten 4 Karten deines Decks an und lege beliebig viele Metal-Energiekarten, die du dort findest, an 1 deiner Pokémon an. Mische die anderen Karten zurück in dein Deck."
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
				en: "Steel Tackle",
				fr: "Charge d’Acier",
				es: "Placaje de Acero",
				it: "Ferrazione",
				pt: "Colisão de Aço",
				de: "Stahltackle"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 361340
	}
}

export default card
