import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
		de: "Stahlos"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Perfect Metal",
				fr: "Métal parfait",
				de: "Perfektes Metall"
			},
			effect: {
				en: "Steelix can’t be affected by any Special Conditions.",
				fr: "Steelix ne peut pas être affecté par les États Spéciaux.",
				de: "Stahlos kann nicht von Speziellen Zuständen betroffen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Stream",
				fr: "Courant d’énergie",
				de: "Energiestrom"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Steelix.",
				fr: "Cherchez une carte Énergie dans votre pile de défausse et attachez-la à Steelix.",
				de: "Durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Stahlos an."
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
				en: "Gaia Crush",
				fr: "Anéantissement de Gaïa",
				de: "Gaia-Zermalmer"
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser n’importe quelle carte Stade en jeu.",
				de: "Du kannst eine beliebige Stadion-Karte aus dem Spiel auf den Ablagestapel legen."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
