import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [384],
	set: Set,

	name: {
		'en-us': "Rayquaza V",
		'fr-fr': "Rayquaza V",
		'de-de': "Rayquaza V",
		'es-es': "Rayquaza V",
		'pt-br': "Rayquaza V",
		'it-it': "Rayquaza V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Promo",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Dragon Pulse",
			'fr-fr': "Draco-Choc",
			'de-de': "Drachenpuls",
			'es-es': "Pulso Dragón",
			'pt-br': "Pulso do Dragão",
			'it-it': "Dragopulsar"
		},

		damage: 40,

		effect: {
			'en-us': "Discard the top 2 cards of your deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
			'de-de': "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel.",
			'es-es': "Descarta las 2 primeras cartas de tu baraja.",
			'pt-br': "Descarte as 2 cartas de cima do seu baralho.",
			'it-it': "Scarta le prime due carte del tuo mazzo."
		}
	}, {
		cost: ["Fire", "Lightning"],

		name: {
			'en-us': "Spiral Burst",
			'fr-fr': "Spirale Détonante",
			'de-de': "Spiral-Detonation",
			'es-es': "Explosión en Espiral",
			'pt-br': "Explosão Espiralada",
			'it-it': "Spiralscoppio"
		},

		damage: "20+",

		effect: {
			'en-us': "You may discard up to 2 basic {R} Energy or up to 2 basic {L} Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser jusqu'à 2 Énergies {R} de base ou jusqu'à 2 Énergies {L} de base de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'de-de': "Du kannst bis zu 2 Basis-{R}-Energien oder bis zu 2 Basis-{L}-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 80 Schadenspunkte mehr zu.",
			'es-es': "Puedes descartar hasta 2 Energías {R} Básicas o hasta 2 Energías {L} Básicas de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'pt-br': "Você pode descartar até 2 Energias {R} básicas ou até 2 Energias {L} básicas deste Pokémon. Este ataque causa 80 pontos de dano a mais para cada carta descartada desta forma.",
			'it-it': "Puoi scartare fino a due Energie base {R} o due Energie base {L} da questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo."
		}
	}],

	regulationMark: "E",
	suffix: "V",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	hp: 210,
	types: ["Dragon"],
	retreat: 2,

	thirdParty: {
		cardmarket: 576723
	}
}

export default card
