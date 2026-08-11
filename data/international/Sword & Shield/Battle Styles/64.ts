import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [825],
	set: Set,

	name: {
		'en-us': "Dottler",
		'fr-fr': "Coléodôme",
		'es-es': "Dottler",
		'it-it': "Dottler",
		'pt-br': "Dottler",
		'de-de': "Keradar"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Blipbug",
		'fr-fr': "Larvadar",
		'es-es': "Blipbug",
		'it-it': "Blipbug",
		'pt-br': "Blipbug",
		'de-de': "Sensect"
	},

	attacks: [{
		name: {
			'en-us': "Radar",
			'fr-fr': "Radar",
			'es-es': "Radar",
			'it-it': "Radar",
			'pt-br': "Radar",
			'de-de': "Radar"
		},

		effect: {
			'en-us': "Look at the top 4 cards of your deck and put them back in any order.",
			'fr-fr': "Regardez les 4 cartes du dessus de votre deck, puis replacez-les dans l'ordre de votre choix.",
			'es-es': "Mira las 4 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
			'it-it': "Guarda le prime quattro carte del tuo mazzo e rimettile a posto nell'ordine che preferisci.",
			'pt-br': "Olhe as 4 cartas de cima do seu baralho e coloque-as de volta em qualquer ordem.",
			'de-de': "Schau dir die obersten 4 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "As it grows inside its shell, it uses its psychic abilities to monitor the outside world and prepare for evolution."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545436,
				tcgplayer: 234238
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545436,
				tcgplayer: 234238
			}
		},
	],
}

export default card
