import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",
	illustrator: "chibi",

	attacks: [{
		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique",
			'es-es': "Viento Feérico",
			'it-it': "Vento di Fata",
			'pt-br': "Fairy Wind",
			'de-de': "Feenbrise"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Double Spin",
			'fr-fr': "Double Tour",
			'es-es': "Doble Giro",
			'it-it': "Doppioturbo",
			'pt-br': "Double Spin",
			'de-de': "Doppeldreher"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'pt-br': "Flip 2 coins. This attack does 50 damage for each heads.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
		'es-es': "Flabébé",
		'it-it': "Flabébé",
		'pt-br': "Flabébé",
		'de-de': "Flabébé"
	},

	description: {
		'en-us': "It gives its own power to flowers, pouring its heart into caring for them. Floette never forgives anyone who messes up a flower bed."
	},

	dexId: [670],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574120,
				tcgplayer: 246852
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574120,
				tcgplayer: 246852
			}
		},
	],
}

export default card
