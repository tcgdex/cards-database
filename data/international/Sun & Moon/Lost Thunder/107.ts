import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Poipole",
		'fr-fr': "Vémini",
		'es-es': "Poipole",
		'it-it': "Poipole",
		'pt-br': "Poipole",
		'de-de': "Venicro"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		803,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Eye Opener",
				'fr-fr': "Ouvrir les Yeux",
				'es-es': "Bebida Amanecer",
				'it-it': "Sbirciata",
				'pt-br': "Olhos Abertos",
				'de-de': "Spähen"
			},
			effect: {
				'en-us': "Look at your face-down Prize cards.",
				'fr-fr': "Regardez vos cartes Récompense (actuellement face cachée).",
				'es-es': "Mira tus cartas de Premio que están boca abajo.",
				'it-it': "Guarda le tue carte Premio coperte.",
				'pt-br': "Olhe as suas cartas de Prêmio viradas para baixo.",
				'de-de': "Sieh dir deine verdeckten Preiskarten an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Schnabel"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Ultra Beast is well enough liked to be chosen as a first partner in its own world.",
	},

	thirdParty: {
		cardmarket: 365744,
		tcgplayer: 178920
	}
}

export default card
