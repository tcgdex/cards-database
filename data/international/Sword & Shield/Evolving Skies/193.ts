import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Rayquaza V",
		'fr-fr': "Rayquaza V",
		'es-es': "Rayquaza V",
		'it-it': "Rayquaza V",
		'pt-br': "Rayquaza V",
		'de-de': "Rayquaza V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		name: {
			'en-us': "Dragon Pulse",
			'fr-fr': "Draco-Choc",
			'es-es': "Pulso Dragón",
			'it-it': "Dragopulsar",
			'pt-br': "Dragon Pulse",
			'de-de': "Drachenpuls"
		},

		effect: {
			'en-us': "Discard the top 2 cards of your deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
			'es-es': "Descarta las 2 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime due carte del tuo mazzo.",
			'pt-br': "Discard the top 2 cards of your deck.",
			'de-de': "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Spiral Burst",
			'fr-fr': "Spirale Détonante",
			'es-es': "Explosión en Espiral",
			'it-it': "Spiralscoppio",
			'pt-br': "Spiral Burst",
			'de-de': "Spiral-Detonation"
		},

		effect: {
			'en-us': "You may discard up to 2 basic Fire Energy or up to 2 basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser jusqu'à 2 Énergies Fire de base ou jusqu'à 2 Énergies Lightning de base de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar hasta 2 Energías Fire Básicas o hasta 2 Energías Lightning Básicas de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare fino a due Energie base Fire o due Energie base Lightning da questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "You may discard up to 2 basic Fire Energy or up to 2 basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			'de-de': "Du kannst bis zu 2 Basis-Fire-Energien oder bis zu 2 Basis-Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 80 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Fire", "Lightning"]
	}],

	retreat: 2,
	dexId: [384],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574251,
				tcgplayer: 246727
			}
		},
	],
}

export default card
