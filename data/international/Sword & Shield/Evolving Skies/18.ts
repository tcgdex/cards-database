import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Flareon VMAX",
		'fr-fr': "Pyroli VMAX",
		'es-es': "Flareon VMAX",
		'it-it': "Flareon VMAX",
		'pt-br': "Flareon VMAX",
		'de-de': "Flamara VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			'en-us': "Max Detonate",
			'fr-fr': "Éclatomax",
			'es-es': "Maxidetonación",
			'it-it': "Dynadeflagrazione",
			'pt-br': "Max Detonate",
			'de-de': "Dyna-Sprengung"
		},

		effect: {
			'en-us': "Discard the top 5 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way.",
			'fr-fr': "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie défaussée de cette façon.",
			'es-es': "Descarta las 5 primeras cartas de tu baraja. Este ataque hace 100 puntos de daño por cada carta de Energía que hayas descartado de esta manera.",
			'it-it': "Scarta le prime cinque carte del tuo mazzo. Questo attacco infligge 100 danni per ogni carta Energia che hai scartato in questo modo.",
			'pt-br': "Discard the top 5 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way.",
			'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Energiekarte 100 Schadenspunkte zu."
		},

		damage: "100×",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Flareon V",
		'fr-fr': "Pyroli-V",
		'es-es': "Flareon V",
		'it-it': "Flareon-V",
		'pt-br': "Flareon V",
		'de-de': "Flamara-V"
	},

	dexId: [136],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574042,
				tcgplayer: 246712
			}
		},
	],
}

export default card
