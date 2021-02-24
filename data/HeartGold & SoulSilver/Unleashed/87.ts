import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare",
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
			},
			effect: {
				en: "Steelix can't be affected by any Special Conditions.",
				fr: "Steelix ne peut pas être affecté par les États Spéciaux.",
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
				fr: "Courant d'énergie",
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Steelix.",
				fr: "Cherchez une carte Énergie dans votre pile de défausse et attachez-la à Steelix.",
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
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
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



}

export default card
