import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Victini V",
		'fr-fr': "Victini V",
		'es-es': "Victini V",
		'it-it': "Victini V",
		'pt-br': "Victini V",
		'de-de': "Victini V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spreading Flames",
				'fr-fr': "Flammes Rampantes",
				'es-es': "Llamas Dispersas",
				'it-it': "Spargifiamma",
				'pt-br': "Chamas Alastrantes",
				'de-de': "Flammenausbreitung"
			},
			effect: {
				'en-us': "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
				'fr-fr': "Attachez jusqu'à 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît.",
				'es-es': "Une hasta 3 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
				'it-it': "Assegna ai tuoi Pokémon fino a tre carte Energia Fire dalla tua pila degli scarti nel modo che preferisci.",
				'pt-br': "Ligue até 3 cartas de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar.",
				'de-de': "Lege bis zu 3 Fire-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Energy Burst",
				'fr-fr': "Explosion d'Énergie",
				'es-es': "Explosión de Energía",
				'it-it': "Energiscoppio",
				'pt-br': "Explosão de Energia",
				'de-de': "Energieausbruch"
			},
			effect: {
				'en-us': "This attack does 30 damage for each Energy attached to both Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
				'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
				'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
				'de-de': "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	suffix: "V",
	dexId: [494],

	thirdParty: {
		cardmarket: 427181,
		tcgplayer: 206048
	}
}

export default card
