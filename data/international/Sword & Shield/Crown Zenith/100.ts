import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [384],
	set: Set,

	name: {
		'en-us': "Rayquaza V",
		'fr-fr': "Rayquaza V",
		'es-es': "Rayquaza V",
		'it-it': "Rayquaza V",
		'pt-br': "Rayquaza V",
		'de-de': "Rayquaza V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Dragon Pulse",
			'fr-fr': "Draco-Choc",
			'es-es': "Pulso Dragón",
			'it-it': "Dragopulsar",
			'pt-br': "Pulso do Dragão",
			'de-de': "Drachenpuls"
		},

		effect: {
			'en-us': "Discard the top 2 cards of your deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
			'es-es': "Descarta las 2 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime due carte del tuo mazzo.",
			'pt-br': "Descarte as 2 cartas de cima do seu baralho.",
			'de-de': "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 40
	}, {
		cost: ["Fire", "Lightning"],

		name: {
			'en-us': "Spiral Burst",
			'fr-fr': "Spirale Détonante",
			'es-es': "Explosión en Espiral",
			'it-it': "Spiralscoppio",
			'pt-br': "Explosão Espiralada",
			'de-de': "Spiral-Detonation"
		},

		effect: {
			'en-us': "You may discard up to 2 basic Fire Energy or up to 2 basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser jusqu'à 2 Énergies Fire de base ou jusqu'à 2 Énergies Lightning de base de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar hasta 2 Energías Fire Básicas o hasta 2 Energías Lightning Básicas de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare fino a due Energie base Fire o due Energie base Lightning da questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar até 2 Energias Fire básicas ou até 2 Energias Lightning básicas deste Pokémon. Este ataque causa 80 pontos de dano a mais para cada carta descartada desta forma.",
			'de-de': "Du kannst bis zu 2 Basis-Fire-Energien oder bis zu 2 Basis-Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 80 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 2,
	regulationMark: "E",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691819,
				tcgplayer: 478209
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 786538
			}
		},
	],
}

export default card
