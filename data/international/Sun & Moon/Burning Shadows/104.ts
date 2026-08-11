import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Calculate",
				'fr-fr': "Calcul",
				'es-es': "Calcular",
				'it-it': "Calcolare",
				'pt-br': "Calcular",
				'de-de': "Berechnen"
			},
			effect: {
				'en-us': "Look at the top 6 cards of your deck and put them back in any order.",
				'fr-fr': "Regardez les 6 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
				'es-es': "Mira las 6 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				'it-it': "Guarda le prime sei carte del tuo mazzo e rimettile a posto nell’ordine che preferisci.",
				'pt-br': "Olhe as 6 primeiras cartas do seu baralho e coloque-as de volta em qualquer ordem.",
				'de-de': "Schau dir die obersten 6 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beam",
				'fr-fr': "Rayon",
				'es-es': "Transmisión",
				'it-it': "Raggio",
				'pt-br': "Feixe",
				'de-de': "Strahl"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "For the purposes of planetary development, Porygon was updated with the most cutting-edge technology available.",
	},

	thirdParty: {
		cardmarket: 299505,
		tcgplayer: 138600
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
