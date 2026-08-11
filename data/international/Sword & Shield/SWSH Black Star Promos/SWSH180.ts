import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [136],
	set: Set,

	name: {
		'fr-fr': "Pyroli VMAX",
		'de-de': "Flamara VMAX",
		'es-es': "Flareon VMAX",
		'pt-br': "Flareon VMAX",
		'it-it': "Flareon VMAX",
		'en-us': "Flareon VMAX"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Pyroli-V",
		'de-de': "Flamara-V",
		'es-es': "Flareon V",
		'pt-br': "Flareon V",
		'it-it': "Flareon-V",
		'en-us': "Flareon V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Éclatomax",
			'de-de': "Dyna-Sprengung",
			'es-es': "Maxidetonación",
			'pt-br': "Detonar Max",
			'it-it': "Dynadeflagrazione",
			'en-us': "Max Detonate"
		},

		effect: {
			'fr-fr': "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie défaussée de cette façon.",
			'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Energiekarte 100 Schadenspunkte zu.",
			'es-es': "Descarta las 5 primeras cartas de tu baraja. Este ataque hace 100 puntos de daño por cada carta de Energía que hayas descartado de esta manera.",
			'pt-br': "Descarte as 5 cartas de cima do seu baralho. Este ataque causa 100 pontos de dano para cada carta de Energia descartada desta forma.",
			'it-it': "Scarta le prime cinque carte del tuo mazzo. Questo attacco infligge 100 danni per ogni carta Energia che hai scartato in questo modo.",
			'en-us': "Discard the top 5 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 583205
	}
}

export default card
