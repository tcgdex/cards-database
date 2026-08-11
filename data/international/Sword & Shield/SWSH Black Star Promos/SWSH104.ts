import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Victini V",
		'fr-fr': "Victini V",
		'es-es': "Victini V",
		'pt-br': "Victini V",
		'de-de': "Victini V",
		'it-it': "Victini V"
	},

	rarity: "Promo",
	hp: 190,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Spreading Flames",
			'fr-fr': "Flammes Rampantes",
			'es-es': "Llamas Dispersas",
			'pt-br': "Chamas Alastrantes",
			'de-de': "Flammenausbreitung",
			'it-it': "Spargifiamma"
		},

		effect: {
			'en-us': "Attach up to 3 {R} Energy cards from your discard pile to your Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 3 cartes Énergie {R} de votre pile de défausse à vos Pokémon comme il vous plaît.",
			'es-es': "Une hasta 3 cartas de Energía {R} de tu pila de descartes a tus Pokémon de la manera que desees.",
			'pt-br': "Ligue até 3 cartas de Energia {R} da sua pilha de descarte aos seus Pokémon como desejar.",
			'de-de': "Lege bis zu 3 {R}-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an.",
			'it-it': "Assegna ai tuoi Pokémon fino a tre carte Energia {R} dalla tua pila degli scarti nel modo che preferisci."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Energy Burst",
			'fr-fr': "Explosion d'Énergie",
			'es-es': "Explosión de Energía",
			'pt-br': "Explosão de Energia",
			'de-de': "Energieausbruch",
			'it-it': "Energiscoppio"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Energy attached to both Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
			'de-de': "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi."
		},

		damage: "30×",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	dexId: [494],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 561769
	}
}

export default card
