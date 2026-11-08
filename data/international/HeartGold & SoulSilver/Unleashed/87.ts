import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'de-de': "Stahlos"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [208],

	hp: 140,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Perfect Metal",
				'fr-fr': "Métal parfait",
				'de-de': "Perfektes Metall"
			},
			effect: {
				'en-us': "Steelix can't be affected by any Special Conditions",
				'fr-fr': "Steelix ne peut pas être affecté par les États Spéciaux.",
				'de-de': "Stahlos kann nicht von Speziellen Zuständen betroffen werden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Stream",
				'fr-fr': "Courant d’énergie",
				'de-de': "Energiestrom"
			},
			effect: {
				'en-us': "Search your discard pile for an Energy card and attach it to Steelix.",
				'fr-fr': "Cherchez une carte Énergie dans votre pile de défausse et attachez-la à Steelix.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Stahlos an."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gaia Crush",
				'fr-fr': "Anéantissement de Gaïa",
				'de-de': "Gaia-Zermalmer"
			},
			effect: {
				'en-us': "You may discard any Stadium card in play.",
				'fr-fr': "Vous pouvez défausser n’importe quelle carte Stade en jeu.",
				'de-de': "Du kannst eine beliebige Stadion-Karte aus dem Spiel auf den Ablagestapel legen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279180,
				tcgplayer: 89564
			}
		},
	],

}

export default card
