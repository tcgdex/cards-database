import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'de-de': "Stollrak"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Roar",
				'fr-fr': "Hurlement",
				'de-de': "Brüller"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc, s'il en a.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Charge",
				'fr-fr': "Attaque métallique",
				'de-de': "Metallischer Sturmangriff"
			},
			effect: {
				'en-us': "Put 1 damage counter on Lairon.",
				'fr-fr': "Placez 1 marqueur de dégât sur Galegon.",
				'de-de': "Lege 1 Schadensmarke auf Stollrak."
			},
			damage: 50,

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
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277117,
		tcgplayer: 86578
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
